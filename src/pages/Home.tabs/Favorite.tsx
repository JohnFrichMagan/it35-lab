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
              <img alt="Silhouette of mountains" src="https://i.pinimg.com/736x/31/61/a0/3161a00b8833bbf5c77e0801722342cc.jpg" />
              <IonCardHeader>
                <IonCardTitle>Monkey D. Luffy</IonCardTitle>
                <IonCardSubtitle> The Future King of the Pirates</IonCardSubtitle>
              </IonCardHeader>
        
              <IonCardContent>
              Monkey D. Luffy is the main protagonist of One Piece and the captain of the Straw Hat Pirates. He is a cheerful, fearless, and determined pirate whose ultimate dream is to find the legendary treasure, One Piece, and become the King of the Pirates. Despite his carefree and goofy nature, Luffy possesses an unbreakable will and an unwavering belief in his friends, often risking his life to protect them.
              Luffy is recognizable by his straw hat, which he received from Red-Haired Shanks, the pirate who inspired him to set sail. He has a lean, muscular build, a scar under his left eye, and usually wears a red vest, blue shorts, and sandals. His most defining feature, however, is his Rubber-Rubber Fruit (Gomu Gomu no Mi), which turned his body into rubber, allowing him to stretch his limbs and absorb blunt attacks. Over time, he has developed powerful techniques such as Gear Second (increasing his speed), Gear Third (inflating his limbs for massive attacks), Gear Fourth (enhancing his strength and agility), and his ultimate transformation, Gear Fifth, which grants him near-reality-warping abilities inspired by the legendary Sun God, Nika.
              Despite his immense strength, Luffy is defined by his kind heart and sense of justice. He does not fight for fame or power but to protect his friends and uphold his ideals of freedom. He has earned the loyalty of powerful allies and the respect of legendary figures such as Silvers Rayleigh, Dracule Mihawk, and even Gol D. Roger’s crew members. His boldness and ability to inspire those around him make him a natural leader, and he refuses to bow to tyranny, challenging powerful figures like the World Government, the Marines, and the Yonko.
              Luffy's journey from a small boy in the East Blue to one of the most wanted pirates in the world is nothing short of extraordinary. His bounty has skyrocketed after every major battle, and his latest feats have positioned him as one of the new Emperors of the Sea (Yonko). With his ever-growing strength and legendary willpower, Luffy is closer than ever to achieving his dream of finding the One Piece and fulfilling his destiny as the King of the Pirates.
              </IonCardContent>
            </IonCard>
        </IonContent>
      </IonPage>
    );
  };
  export default Favorite;