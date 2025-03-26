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
  const Feed: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Feed</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        <IonCard>
      <img alt="Silhouette of mountains" src="https://i.pinimg.com/736x/6e/61/be/6e61be653b55e4b7eb87f846def99354.jpg" />
      <IonCardHeader>
        <IonCardTitle>Roronoa Zoro</IonCardTitle>
        <IonCardSubtitle>The King of Hell and Future Greatest Swordsman </IonCardSubtitle>
      </IonCardHeader>
      
      <IonCardContent>
          Roronoa Zoro is the swordsman of the **Straw Hat Pirates** and one of the strongest fighters in the crew. As Luffy’s first mate and unofficial **vice-captain**, he serves as the crew’s pillar of strength and loyalty. Zoro’s ultimate goal is to become the **world’s greatest swordsman**, a promise he made to his childhood friend **Kuina** before her tragic death. To achieve this, he constantly trains and pushes himself to his limits, refusing to lose against any swordsman until he surpasses **Dracule Mihawk**, the current strongest in the world.  
          Zoro is a tall, muscular warrior with **green hair**, a distinctive haramaki (waistband), and three swords always at his side. He has a large diagonal scar across his chest, a reminder of his humiliating defeat against Mihawk. He is almost always seen wearing a black bandana tied around his arm, which he only wears on his head when fighting seriously. Known for his **stoic and disciplined personality**, Zoro rarely expresses emotions outside of combat but deeply cares for his friends. However, he also has a **terrible sense of direction**, constantly getting lost—even in simple, straight paths.  
          Zoro is a **master swordsman**, wielding the powerful **Three-Sword Style (Santoryu)**, where he uses one sword in each hand and a third in his mouth. His attacks are devastating, capable of slicing through steel, mountains, and even entire battleships. Some of his most iconic techniques include **Oni Giri (Demon Slash), Sanzen Sekai (Three Thousand Worlds), and Asura**, a transformation where he creates the illusion of six arms and three heads, tripling his power. Zoro has also mastered **Haki**, including **Armament Haki** to enhance his sword strikes and **Conqueror’s Haki**, which allows him to coat his attacks in overwhelming power, a rare skill among the strongest warriors.  
          Zoro’s greatest strength is his **unbreakable willpower and endurance**. One of his most iconic moments occurs during the *Thriller Bark Arc*, when he takes all of Luffy’s accumulated pain and injuries from the battle against **Bartholomew Kuma**. Nearly dying in the process, he simply stands and says, **“Nothing happened,”** proving his resilience and dedication. In the *Wano Arc*, he reaches new heights by mastering **Enma**, the legendary sword of **Kozuki Oden**, and unlocking the advanced use of **Conqueror’s Haki**, earning the title **"King of Hell."**  
          As one of the **Monster Trio**, alongside **Luffy and Sanji**, Zoro is one of the most feared pirates in the world. His **bounty continues to rise** as he takes on legendary foes, proving himself as **Luffy’s strongest right-hand man**. With each battle, he moves closer to his goal of surpassing Mihawk and becoming the **world’s greatest swordsman**, solidifying his place as one of the most iconic warriors in *One Piece*.
      </IonCardContent>
    </IonCard>
        
        </IonContent>
      </IonPage>
    );
  };
  export default Feed;