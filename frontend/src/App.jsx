import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Button, TextField, Paper, Grid, CircularProgress, LinearProgress } from '@mui/material';
import { Flame, Award, Download } from 'lucide-react';
import QuestionEngine from './components/QuestionEngine';
import { chapter13Questions } from './questions';
import { jsPDF } from "jspdf";

function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(true);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    if (token) verifyToken(token); else setVerifying(false);
  }, []);

  const verifyToken = async (token) => {
    try {
      const resp = await fetch(`https://api-training.picksgallery.com/auth/verify?token=${token}`);
      if (resp.ok) {
        const data = await resp.json();
        setUser(data);
        window.history.replaceState({}, document.title, "/");
      }
    } catch (err) { console.error(err); } finally { setVerifying(false); }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('https://api-training.picksgallery.com/auth/send-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      alert('Magic link sent!');
    } catch (err) { console.error(err); } finally { setLoading(false); }
  };

  const handleQuestionComplete = async (isCorrect) => {
    // Sync progress to DB
    fetch('https://api-training.picksgallery.com/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userEmail: user.email, questionId: chapter13Questions[currentQuestionIndex].id, correct: isCorrect }),
    });

    if (isCorrect) setScore(prev => ({ ...prev, correct: prev.correct + 1, total: prev.total + 1 }));
    else setScore(prev => ({ ...prev, total: prev.total + 1 }));

    if (currentQuestionIndex < chapter13Questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizStarted(false);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.text("CERTIFICATE OF COMPLETION", 105, 40, { align: "center" });
    doc.setFontSize(16);
    doc.text(`User: ${user.email}`, 105, 60, { align: "center" });
    doc.text(`Course: Hearth Design Specialist - Chapter 13`, 105, 70, { align: "center" });
    doc.text(`Score: ${score.correct} / ${chapter13Questions.length}`, 105, 80, { align: "center" });
    doc.save("Chapter13_Completion.pdf");
  };

  if (verifying) return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}><CircularProgress /></Box>;

  if (!user) return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 10, textAlign: 'center' }}>
        <Flame size={64} color="#670000" />
        <Typography variant="h3" color="primary" sx={{ fontWeight: 800, mb: 4 }}>TRAINING PORTAL</Typography>
        <Paper sx={{ p: 4 }}>
          <form onSubmit={handleLogin}>
            <TextField fullWidth label="Email" value={email} onChange={(e) => setEmail(e.target.value)} sx={{ mb: 3 }} required />
            <Button type="submit" variant="contained" fullWidth size="large" disabled={loading}>Send Magic Link</Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      {!quizStarted ? (
        <Box>
          <Typography variant="h4" color="primary" sx={{ fontWeight: 700, mb: 4 }}>Dashboard</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 4, borderLeft: '8px solid #670000' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Chapter 13 Pilot</Typography>
                <Typography variant="body2" sx={{ mb: 3 }}>Masonry Chimneys & Fireplaces</Typography>
                <Button variant="contained" onClick={() => {setQuizStarted(true); setScore({correct:0, total:0}); setCurrentQuestionIndex(0);}}>Start Training</Button>
                {score.total > 0 && (
                  <Button variant="outlined" startIcon={<Download />} onClick={generatePDF} sx={{ ml: 2 }}>Export PDF</Button>
                )}
              </Paper>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box>
          <LinearProgress variant="determinate" value={((currentQuestionIndex) / chapter13Questions.length) * 100} sx={{ mb: 4, height: 10, borderRadius: 5 }} />
          <QuestionEngine 
            data={chapter13Questions[currentQuestionIndex]} 
            onComplete={handleQuestionComplete} 
            onReport={(id, n, c) => fetch('https://api-training.picksgallery.com/report-question', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ userEmail: user.email, questionId: id, note: n, context: c }),
            }).then(() => alert("Report Sent"))}
          />
        </Box>
      )}
    </Container>
  );
}

export default App;