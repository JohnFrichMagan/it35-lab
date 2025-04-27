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
  useIonRouter 
} from '@ionic/react';
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
        {/* Container (IonCard) for Login Form */}
        <IonCard style={{
          maxWidth: '400px',
          margin: 'auto',
          padding: '20px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          borderRadius: '12px',
          background: 'fff',
        }}>
          <IonCardContent style={{ textAlign: 'center' }}>
            
            {/* Avatar inside the card */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '20px',  // space between avatar and form
            }}>
              <IonAvatar
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',  // Makes the avatar a circle
                  overflow: 'hidden',
                  marginBottom: '10px',  // space between avatar and heading
                  border: '4px solid #007bff',  // Optional: Add a border around the avatar
                }}
              >
                <img
                  src="https://i.pinimg.com/736x/d0/fd/99/d0fd9905166ede4f50a00d60c9b5ebdc.jpg"
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
                borderRadius: '50px', // Fully rounded border
              }}
            />

            {/* Password input */}
            <IonInput
              style={{
                width: '100%',
                marginBottom: '20px',
                padding: '12px',
                borderRadius: '50px', // Fully rounded border
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
                background: 'linear-gradient(45deg, #007bff, #00c6ff)', // Gradient background
                color: '#000',
                padding: '12px',
                fontSize: '16px',
                borderRadius: '50px', // Rounded corners for the button
                boxShadow: '0 4px 6px rgba(247, 249, 252, 0.4)', // Subtle shadow
                transition: 'all 0.3s ease-in-out', // Smooth transition
              }}
              onIonFocus={(e) => e.target.style.transform = 'scale(1.05)'} // Slight zoom effect on focus
              onIonBlur={(e) => e.target.style.transform = 'scale(1)'} // Reset zoom effect
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

          </IonCardContent>
        </IonCard>

        {/* Reusable AlertBox Component */}
        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />

        {/* IonToast for success message */}
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
