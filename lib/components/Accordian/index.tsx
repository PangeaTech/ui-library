import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { default as MuiAccordion } from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { ReactNode } from 'react';

interface IAccordion {
  title: string | ReactNode;
  summary: string | ReactNode;
  sxSummary?: Record<string, string>;
  sxDetails?: Record<string, string>;
}
const Accordion = ({ title, summary, sxSummary = {}, sxDetails = {} }: IAccordion) => {
  return (
    <MuiAccordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" sx={sxSummary}>
        {title}
      </AccordionSummary>
      <AccordionDetails sx={sxDetails}>{summary}</AccordionDetails>
    </MuiAccordion>
  );
};

export default Accordion;
