import { 
  IonAvatar,
  IonButton,
  IonCol,
  IonContent, 
  IonGrid, 
  IonHeader, 
  IonInput, 
  IonInputPasswordToggle, 
  IonPage, 
  IonRow, 
  IonTitle, 
  IonToolbar, 
  useIonRouter,
  IonText
} from '@ionic/react';

const Login: React.FC = () => {
  const navigation = useIonRouter();

  const doLogin = () => {
    navigation.push('/it35-lab/app', 'forward', 'replace');
  };

  const goToRegister = () => {
    navigation.push('/it35-lab/register');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <div style={{ marginTop: '25%' }}>
          <IonGrid style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <IonRow>
              <IonCol size="8">
                <IonAvatar style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img
                    style={{ width: '100px', objectFit: 'cover' }}
                    alt="Silhouette of a person's head"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8IuuDjoVX1X4nogT6N9ZqKE9uoTYkU8eSzQ&s"
                  />
                </IonAvatar>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonInput label="Username" placeholder="Enter username" />
          <IonInput type="password" label="Password">
            <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
          </IonInput>
          <IonButton onClick={doLogin} expand="full">
            Login
          </IonButton>

          <IonText color="primary" style={{ display: 'block', marginTop: '15px', textAlign: 'center' }}>
            Don't have an account?{' '}
            <span onClick={goToRegister} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Sign up
            </span>
          </IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
