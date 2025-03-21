import { 
    IonButtons,
      IonCard,
      IonCardContent,
      IonCardHeader,
      IonCardSubtitle,
      IonCardTitle,
      IonContent, 
      IonHeader, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react';
  const Favorite: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Favorite</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        <IonCard>
              <img alt="Silhouette of mountains" src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/03/Featured-Image-Luffy.jpg" />
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>
        
              <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
            </IonCard>
        </IonContent>
      </IonPage>
    );
  };
  export default Favorite;