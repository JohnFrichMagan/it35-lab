// imports
import { 
  IonAlert, 
  IonAvatar, 
  IonButton, 
  IonContent, 
  IonInput, 
  IonInputPasswordToggle,  
  IonPage,  
  IonToast, 
  IonCard, 
  IonCardContent,
  IonIcon, // <-- Add this!
  useIonRouter 
} from '@ionic/react';
import { logoFacebook, logoInstagram, mailOutline } from 'ionicons/icons'; // <-- Add icons
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({ message, isOpen, onClose }) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onClose}
      header="Notification"
      message={message}
      buttons={['OK']}
    />
  );
};

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const doLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setAlertMessage(error.message);
      setShowAlert(true);
      return;
    }

    setShowToast(true);
    setTimeout(() => {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }, 300);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding" style={{ backgroundColor: '#f4f4f4' }}>
        <IonCard style={{
          maxWidth: '400px',
          margin: 'auto',
          padding: '20px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          borderRadius: '12px',
          background: '#fff', // Fix missing '#'
        }}>
          <IonCardContent style={{ textAlign: 'center' }}>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '20px',
            }}>
              <IonAvatar
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  marginBottom: '10px',
                  border: '4px solid #007bff',
                }}
              >
                <img
                  src="https://i.pinimg.com/736x/73/bf/f5/73bff5ec115f325a9bd5b3211716129c.jpg"
                  alt="User Avatar"
                  style={{ width: '100%', height: '100%' }}
                />
              </IonAvatar>
              <h1 style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>LOGIN</h1>
            </div>

            {/* Email input */}
            <IonInput
              label="Email"
              labelPlacement="floating"
              fill="outline"
              shape="round"
              type="email"
              placeholder="Enter Email"
              value={email}
              onIonChange={e => setEmail(e.detail.value!)}
              style={{
                width: '100%',
                marginBottom: '15px',
                padding: '12px',
                borderRadius: '50px',
              }}
            />

            {/* Password input */}
            <IonInput
              style={{
                width: '100%',
                marginBottom: '20px',
                padding: '12px',
                borderRadius: '50px',
              }}
              label="Password"
              labelPlacement="floating"
              fill="outline"
              shape="round" 
              type="password"
              placeholder="Password"
              value={password}
              onIonChange={e => setPassword(e.detail.value!)}
            >
              <IonInputPasswordToggle slot="end" />
            </IonInput>

            {/* Login Button */}
            <IonButton 
              onClick={doLogin} 
              expand="full" 
              shape="round" 
              style={{
                marginBottom: '15px',
                background: 'linear-gradient(45deg, #007bff, #00c6ff)',
                color: '#000',
                padding: '12px',
                fontSize: '16px',
                borderRadius: '50px',
                boxShadow: '0 4px 6px rgba(247, 249, 252, 0.4)',
                transition: 'all 0.3s ease-in-out',
              }}
              onIonFocus={(e) => e.target.style.transform = 'scale(1.05)'}
              onIonBlur={(e) => e.target.style.transform = 'scale(1)'}
            >
              Login
            </IonButton>

            {/* Register Button */}
            <IonButton
              routerLink="/it35-lab/register"
              expand="full"
              fill="clear"
              shape="round"
              style={{
                fontSize: '14px',
                color: '#000',
              }}
            >
              Don't have an account? Register here
            </IonButton>

            {/* --- Add Icons Below --- */}
            <div style={{
              marginTop: '25px',
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
            }}>
              <IonButton fill="clear" color="primary" size="small">
                <IonIcon icon={logoFacebook} style={{ fontSize: '24px' }} />
              </IonButton>
              <IonButton fill="clear" color="danger" size="small">
                <IonIcon icon={logoInstagram} style={{ fontSize: '24px' }} />
              </IonButton>
              <IonButton fill="clear" color="medium" size="small">
                <IonIcon icon={mailOutline} style={{ fontSize: '24px' }} />
              </IonButton>
            </div>
            {/* --- Icons End --- */}

          </IonCardContent>
        </IonCard>

        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Login successful! Redirecting..."
          duration={1500}
          position="top"
          color="primary"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
