import { 
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar
} from '@ionic/react';

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* Search Bar */}
        <div style={{ padding: '16px' }}>
          <IonSearchbar placeholder="Search" />
        </div>

        {/* Flex container */}
        <div style={{
          display: 'flex',
          gap: '16px',
          padding: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap', // Allow wrapping if screen is small
        }}>
          <IonCard style={{ width: '150px' }}>
            <img 
              alt="Kuroko's Basketball"
              src="https://imgs.search.brave.com/VOxgolF0KyslpxfyidKDcPsPsmCFA8QyfU2-2r_Tz9c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/ZC9kMS9LdXJva28l/MjdzX0Jhc2tldGJh/bGxfQmx1LXJheV9W/b2x1bWVfMS5qcGcv/NTEycHgtS3Vyb2tv/JTI3c19CYXNrZXRi/YWxsX0JsdS1yYXlf/Vm9sdW1lXzEuanBn"
            />
            <IonCardHeader>
              <IonCardTitle>Kuroko's Basketball S1</IonCardTitle>
              <IonCardSubtitle>Japanese Anime</IonCardSubtitle>
            </IonCardHeader>
          </IonCard>

          <IonCard style={{ width: '150px' }}>
            <img 
              alt="Kuroko's Basketball S2"
              src="https://imgs.search.brave.com/3X7RFoAHYwZkGE0Y4W3LM3S3hpPjA4kiLEOup0Adtns/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/OS85Ny9LdXJva28l/MjdzX0Jhc2tldGJh/bGxfUzJfQmx1LXJh/eV9Wb2wuXzEuanBn/LzUxMnB4LUt1cm9r/byUyN3NfQmFza2V0/YmFsbF9TMl9CbHUt/cmF5X1ZvbC5fMS5q/cGc"
            />
            <IonCardHeader>
              <IonCardTitle>Kuroko's Basketball S2</IonCardTitle>
              <IonCardSubtitle>Japanese Anime</IonCardSubtitle>
            </IonCardHeader>
          </IonCard>

          <IonCard style={{ width: '150px' }}>
            <img 
              alt="Kuroko's Basketball S3"
              src="https://imgs.search.brave.com/2f3CdJH6l-chTILy5uGKWMEx-fCbiXrKLVZryYoB7nk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vYi9iMS9L/dXJva28nc19CYXNr/ZXRiYWxsX1MzX0Js/dS1yYXlfVm9sLl8x/LmpwZw"
            />
            <IonCardHeader>
              <IonCardTitle>Kuroko's Basketball S3</IonCardTitle>
              <IonCardSubtitle>Japanese Anime</IonCardSubtitle>
            </IonCardHeader>
          </IonCard>

          <IonCard style={{ width: '150px' }}>
            <img 
              alt="Haikyu!! season 1"
              src="https://imgs.search.brave.com/W7v4l5LmZ2s43rpfA0kfuxi2_S9Vxx1FgV0hHzyLHzo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/OS85ZS9IYWlreXVf/c2Vhc29uXzFfRFZE/X2NvdmVyLmpwZy81/MTJweC1IYWlreXVf/c2Vhc29uXzFfRFZE/X2NvdmVyLmpwZw"
            />
            <IonCardHeader>
              <IonCardTitle>Haikyu!! season 1</IonCardTitle>
              <IonCardSubtitle>Japanese Anime</IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
          <IonCard style={{ width: '150px' }}>
            <img 
              alt="Haikyu!! season 2"
              src="https://imgs.search.brave.com/Q8W8t7owajNzvabh-nj-6fRz_IGsl7h340qs4tb3O5o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/ZC9kZC9IYWlreXVf/c2Vhc29uXzJfRFZE/X2NvdmVyLmpwZy81/MTJweC1IYWlreXVf/c2Vhc29uXzJfRFZE/X2NvdmVyLmpwZw"
            />
            <IonCardHeader>
              <IonCardTitle>Haikyu!! season 2</IonCardTitle>
              <IonCardSubtitle>Japanese Anime</IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
          <IonCard style={{ width: '150px' }}>
            <img 
              alt="Haikyu!! season 3"
              src="https://imgs.search.brave.com/rFFnQ_d6JnEFcN2RYIp3rDqpVDlajkrYnNlFufMqMlE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Ny83ZS9IYWlreXVf/c2Vhc29uXzNfRFZE/X2NvdmVyLmpwZy81/MTJweC1IYWlreXVf/c2Vhc29uXzNfRFZE/X2NvdmVyLmpwZw"
            />
            <IonCardHeader>
              <IonCardTitle>Haikyu!! season 3</IonCardTitle>
              <IonCardSubtitle>Japanese Anime</IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
          <IonCard style={{ width: '150px' }}>
            <img 
              alt="Haikyu!! season 4"
              src="https://imgs.search.brave.com/Zl6z6-8jp_G2IVWX8wv1lF85kDRGaPktalyeRMKwULk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/ZC9kZS9IYWlreXVf/c2Vhc29uXzRfQkRf/Y292ZXIuanBnLzUx/MnB4LUhhaWt5dV9z/ZWFzb25fNF9CRF9j/b3Zlci5qcGc"
            />
            <IonCardHeader>
              <IonCardTitle>Haikyu!! season 4</IonCardTitle>
              <IonCardSubtitle>Japanese Anime</IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
          <IonCard style={{ width: '150px' }}>
            <img 
              alt="Solo Leveling S1"
              src="https://imgs.search.brave.com/803B95ds60FUKpgtVmIVWJwNUnxJlNQzk50cH5wBAeQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuanVzdHdhdGNo/LmNvbS9wb3N0ZXIv/MzIyMzY5MjczL3Mz/MzIvdGhlLWxldmVs/aW5nLW9mLXNvbG8t/bGV2ZWxpbmc"
            />
            <IonCardHeader>
              <IonCardTitle>Solo Leveling S1</IonCardTitle>
              <IonCardSubtitle>Japanese Anime</IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
          <IonCard style={{ width: '150px' }}>
            <img 
              alt="Solo Leveling S2"
              src="https://imgs.search.brave.com/pbgD84GWKpMhU2lRctfquOny3Wu-9aXKpIZZ8ubx9nc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5ub3RpZnkubW9l/L2ltYWdlcy9hbmlt/ZS9sYXJnZS9fUERM/eWN4U2cuanBnPzE3/MjY0NzI4NTI"
            />
            <IonCardHeader>
              <IonCardTitle>Solo Leveling S2</IonCardTitle>
              <IonCardSubtitle>Japanese Anime</IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
          <IonCard style={{ width: '150px' }}>
            <img 
              alt="Slam Dunk S1"
              src="https://imgs.search.brave.com/QUfdNUN9WiWfg5Wq2jE7qlNDmOpm_w1QiZFc0NhTHd8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vZi9mNy9T/bGFtX0R1bmtfJTI4/bWFuZ2ElMjlfMS5w/bmc"
            />
            <IonCardHeader>
              <IonCardTitle>Slam Dunk S1</IonCardTitle>
              <IonCardSubtitle>Japanese Anime</IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
          <IonCard style={{ width: '150px' }}>
            <img 
              alt="Wind Breaker S1"
              src="https://imgs.search.brave.com/0O37VA8Nh0M53ferqa-gPv2txtYNMJJ6FRzX0c_LYZc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vZi9mZi9X/aW5kX0JyZWFrZXJf/MS5wbmc"
            />
            <IonCardHeader>
              <IonCardTitle>Wind Breaker S1</IonCardTitle>
              <IonCardSubtitle>Japanese Anime</IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
          <IonCard style={{ width: '150px' }}>
            <img 
              alt="Wind Breaker S2"
              src="https://imgs.search.brave.com/958tLsyJjRWkqWZub8OaTe_QpPFCn8cN4cKDzCGLZUA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMjUv/MDMvZ2xycHVvYXhz/YWFqeWFlLmpwZw"
            />
            <IonCardHeader>
              <IonCardTitle>Wind Breaker S2</IonCardTitle>
              <IonCardSubtitle>Japanese Anime</IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
        </div>
        
      </IonContent>
    </IonPage>
  );
};

export default Search;