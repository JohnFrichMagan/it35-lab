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
  IonToolbar,
  IonImg
} from '@ionic/react';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding" color="light">
        <IonCard className="ion-no-margin ion-no-padding">
          <IonImg 
            src="https://i.pinimg.com/736x/0a/3c/eb/0a3ceb01e9ef08543c9de1d833f8ac08.jpg" 
            style={{ objectFit: 'cover', height: '200px' }}
          />

          <IonCardHeader className="ion-text-center">
            <IonCardTitle style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '10px' }}>
              One Piece
            </IonCardTitle>
            <IonCardSubtitle style={{ fontSize: '16px', color: '#6c757d' }}>
              The Legendary Treasure of the Grand Line
            </IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent style={{ fontSize: '15px', lineHeight: '1.6', textAlign: 'justify' }}>
            <p><strong>One Piece</strong> is a world-famous manga and anime series created by Eiichiro Oda. It follows the epic journey of <strong>Monkey D. Luffy</strong> and his crew, the <em>Straw Hat Pirates</em>, as they sail across the Grand Line in search of the legendary treasure known as <em>One Piece</em>.</p>

            <p>Set in a vast world full of islands, powerful enemies, and ancient mysteries, One Piece is known for its deep storytelling, rich world-building, and emotional character arcs. The world is ruled by the <strong>World Government</strong>, enforced by the Marines, and challenged by powerful pirate crews like the <strong>Four Emperors</strong> and <strong>Warlords of the Sea</strong>.</p>

            <p>Alongside Luffy are Zoro, Nami, Usopp, Sanji, Chopper, Robin, Franky, Brook, and Jinbei — a family bound by adventure and dreams. Together, they battle the toughest foes, uncover ancient secrets, and chase their freedom.</p>

            <p>The true nature of the One Piece remains a mystery, but it promises unimaginable wealth, power, and the truth of the world. Luffy’s dream isn’t just about treasure — it’s about adventure, friendship, and freedom. This is why One Piece remains one of the greatest stories ever told.</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default About;
