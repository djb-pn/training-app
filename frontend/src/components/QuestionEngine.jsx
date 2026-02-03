import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Paper, Checkbox, FormControlLabel, Radio, Grid } from '@mui/material';

export default function QuestionEngine({ data, onComplete, onReport }) {
  const [selected, setSelected] = useState([]);
  const [pairs, setPairs] = useState({});
  const [activeTerm, setActiveTerm] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setSelected([]);
    setPairs({});
    setActiveTerm(null);
    setSubmitted(false);
  }, [data]);

  const handleSubmit = () => {
    let correct = false;
    if (data.type === 'single') {
      correct = selected[0] === data.answer;
    } else if (data.type === 'multiple') {
      correct = JSON.stringify([...selected].sort()) === JSON.stringify([...data.answer].sort());
    } else if (data.type === 'matching') {
      correct = Object.keys(data.answer).every(k => pairs[k] === data.answer[k]) && 
                Object.keys(pairs).length === Object.keys(data.answer).length;
    }
    setIsCorrect(correct);
    setSubmitted(true);
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 3 }}>{data.prompt}</Typography>
      
      {data.type === 'matching' ? (
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {data.terms.map((t, i) => (
              <Paper key={i} onClick={() => !submitted && setActiveTerm(i)}
                sx={{ p: 1.5, mt: 1, cursor: 'pointer', border: activeTerm === i ? '2px solid #670000' : '1px solid #ddd', bgcolor: pairs[i] !== undefined ? '#eee' : 'white' }}>
                {t} {pairs[i] !== undefined && " ✓"}
              </Paper>
            ))}
          </Grid>
          <Grid item xs={6}>
            {data.definitions.map((d, i) => (
              <Paper key={i} onClick={() => activeTerm !== null && !submitted && setPairs(p => ({...p, [activeTerm]: i})) || setActiveTerm(null)}
                sx={{ p: 1.5, mt: 1, cursor: 'pointer', border: '1px solid #ddd', bgcolor: Object.values(pairs).includes(i) ? '#e8f5e9' : 'white' }}>
                {d}
              </Paper>
            ))}
          </Grid>
        </Grid>
      ) : (
        data.options.map((opt, i) => (
          <Paper key={i} onClick={() => !submitted && (data.type === 'single' ? setSelected([i]) : setSelected(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]))}
            sx={{ p: 2, mb: 1, cursor: 'pointer', border: selected.includes(i) ? '2px solid #670000' : '1px solid #ddd' }}>
            <FormControlLabel control={data.type === 'single' ? <Radio checked={selected.includes(i)} /> : <Checkbox checked={selected.includes(i)} />} label={opt} />
          </Paper>
        ))
      )}

      <Button variant="contained" fullWidth sx={{ mt: 3 }} disabled={submitted || (data.type === 'matching' ? Object.keys(pairs).length < data.terms.length : selected.length === 0)} onClick={handleSubmit}>
        Submit Answer
      </Button>

      {submitted && (
        <Box sx={{ mt: 3 }}>
          <Paper sx={{ p: 2, bgcolor: isCorrect ? '#e8f5e9' : '#ffebee', borderLeft: '6px solid ' + (isCorrect ? '#2e7d32' : '#670000') }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{isCorrect ? 'Correct!' : 'Incorrect'}</Typography>
            <Typography variant="body2">"{data.citation}" — Page {data.page}</Typography>
          </Paper>
          <Button variant="outlined" fullWidth sx={{ mt: 2 }} onClick={() => onComplete(isCorrect)}>Next Question</Button>
        </Box>
      )}

      <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid #eee', textAlign: 'center' }}>
        <Button size="small" color="secondary" onClick={() => {
          const n = prompt("What's wrong?");
          if (n && onReport) onReport(data.id, n, data.citation);
        }}>Report Error</Button>
      </Box>
    </Box>
  );
}