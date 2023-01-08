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
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer: "Suspendisse sagittis egestas risus, in porta enim consectetur ac. Proin suscipit turpis ac lectus egestas sodales. Cras congue mattis molestie. Nam neque mauris, vehicula at pulvinar vel, ultrices ac odio. Nunc sem sapien, vehicula vel mattis at, elementum ac ex. Quisque hendrerit diam diam, non convallis est hendrerit non"
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis egestas risus",
      answer: "Suspendisse sagittis egestas risus, in porta enim consectetur ac. Proin suscipit turpis ac lectus egestas sodales. Cras congue mattis molestie. Nam neque mauris, vehicula at pulvinar vel, ultrices ac odio. Nunc sem sapien, vehicula vel mattis at, elementum ac ex. Quisque hendrerit diam diam, non convallis est hendrerit non. Nullam ac aliquam velit, in consectetur libero. Nam commodo sed mi vitae aliquet"
    },
    {
      question: "Lorem ipsum dolor sit amet",
      answer: "Suspendisse sagittis egestas risus, in porta enim consectetur ac. Proin suscipit turpis ac lectus egestas sodales. Cras congue mattis molestie. Nam neque mauris, vehicula at pulvinar vel, ultrices ac odio. Nunc sem sapien, vehicula vel mattis at, elementum ac ex. Quisque hendrerit diam diam, non convallis est hendrerit non. Nullam ac aliquam velit, in consectetur libero. Nam commodo sed mi vitae aliquet. Nam vestibulum pulvinar nisl vel vestibulum"
    },
    {
      question: "Sed mattis vehicula leo vel gravida",
      answer: "Cras nec tempor augue. Maecenas interdum tristique ullamcorper. Morbi a nibh ut felis sagittis sollicitudin. In quis nunc lacus. Nullam vestibulum enim suscipit, sodales dui vel, pretium metus"
    },
    {
      question: "Sed mattis vehicula leo vel gravida. Cras nec tempor augue",
      answer: "Cras nec tempor augue. Maecenas interdum tristique ullamcorper. Morbi a nibh ut felis sagittis sollicitudin. In quis nunc lacus. Nullam vestibulum enim suscipit, sodales dui vel, pretium metus. Etiam consequat elementum enim et luctus"
    },
    {
      question: "Nulla ante odio",
      answer: "Cras nec tempor augue. Maecenas interdum tristique ullamcorper. Morbi a nibh ut felis sagittis sollicitudin. In quis nunc lacus. Nullam vestibulum enim suscipit, sodales dui vel, pretium metus. Etiam consequat elementum enim et luctus. Integer eleifend, est vitae scelerisque blandit, nisi leo tincidunt leo, et posuere est orci nec est"
    },
    {
      question: "Nulla ante odio, tempus a pharetra rhoncus",
      answer: "Aliquam in lobortis ligula. In hendrerit, elit vitae pellentesque dictum, felis ex pellentesque odio, in congue justo justo vitae neque"
    },
    {
      question: "Nulla ante odio, tempus a pharetra rhoncus, ultricies sit amet velit",
      answer: "Aliquam in lobortis ligula. In hendrerit, elit vitae pellentesque dictum, felis ex pellentesque odio, in congue justo justo vitae neque. Nullam elementum tempus sem a pulvinar. Phasellus porta elit eu metus maximus blandit. Nunc sed nulla sit amet nulla vehicula lacinia ut nec mi"
    },
    {
      question: "Sed eu ligula rutrum dui rutrum viverra",
      answer: "Morbi lectus lacus, ullamcorper in egestas lobortis, blandit vitae turpis. Praesent ut libero felis. Sed id condimentum nulla, vel tempus eros. Etiam interdum, velit at hendrerit venenatis"
    },
    {
      question: "Sed eu ligula rutrum dui rutrum viverra. Morbi lectus lacus",
      answer: "Praesent vel malesuada felis, luctus aliquet felis. Fusce augue metus, imperdiet ac tellus a, dignissim consectetur mi. Proin cursus ligula ullamcorper ex porttitor, iaculis vulputate ex commodo. Pellentesque non massa eu eros feugiat fermentum eu eget quam"
    },
  ];
  return (
    <Box m="20px">
        <PageHeader title="FAQ" subtitle="Frequently Asked Questions" />
        {QandA && QandA.map(current => (
          <Box mb="10px">
            <Accordion defaultExpanded={false}>
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
          </Box> 
        ))}
    </Box>    
  );
}

export default FAQ;