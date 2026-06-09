import { Box, Container } from '@mui/material';
import ContactCard from '../../components/Cards/ContactCard/ContactCard.component';
import SectionHeader from '../../components/SectionHeader/SectionHeader.component';

export const ContactsPage = () => {
  return (
    <Box>
      <SectionHeader title='Connection is just a few clicks away' />
      <Container maxWidth='lg'>
        <ContactCard />
      </Container>
    </Box>
  );
};

export default ContactsPage;
