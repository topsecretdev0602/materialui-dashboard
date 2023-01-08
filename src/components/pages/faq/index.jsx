import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, useTheme } from '@mui/material';
import React from 'react'
import { tokens } from '../../../theme';
import PageHeader from '../../layout/PageHeader';

export const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const QandA = [
    {
      question: "First frequently asked question",
      answer: "First Answer"
    },
    {
      question: "Second frequently asked question",
      answer: "Second Answer"
    },
    {
      question: "Third frequently asked question",
      answer: "Third Answer"
    },
    {
      question: "Fourth frequently asked question",
      answer: "Fourth Answer"
    },
    {
      question: "Fifth frequently asked question",
      answer: "Fifth Answer"
    }
  ];
  return (
    <Box m="20px">
        <PageHeader title="FAQ" subtitle="Frequently Asked Questions" />
        {QandA && QandA.map(current => (
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography color={colors.greenAccent[500]} variant="h5">
                {current.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {current.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
    </Box>    
  );
}

export default FAQ;