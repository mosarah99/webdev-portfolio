import { Box, Card, Container } from '@mui/material';
import ContactCard from '../../components/Cards/ContactCard/ContactCard.component';
import SectionHeader from '../../components/SectionHeader/SectionHeader.component';

export const ContactsPage = () => {
  return (
    <Box>
      <section>
        <SectionHeader title='Connection is just a few clicks away' />
        <Container maxWidth='lg'>
          <ContactCard />
        </Container>
      </section>
      <section>
        <Container maxWidth='lg'>
          <SectionHeader title='Where to find me' />
          <Card
            sx={{
              margin: 0,
              padding: 0,
            }}
          >
            <Box
              component='iframe'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160600.64768221346!2d-114.25263613551553!3d51.02750740792613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170039f843fd5%3A0x266d3bb1b652b63a!2sCalgary%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sbd!4v1782748259671!5m2!1sen!2sbd'
              width='100%'
              height={{
                xs: '500px',
                md: '800px',
                // lg: '1200px',
              }}
              sx={{
                border: 0,
                // borderRadius: 2,
              }}
              loading='lazy'
              allowFullScreen
              referrerPolicy='strict-origin-when-cross-origin'
            />
          </Card>
        </Container>
      </section>
    </Box>
  );
};

export default ContactsPage;
