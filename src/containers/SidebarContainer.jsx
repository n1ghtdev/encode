import React from 'react';
import Aside from '../components/Aside';
import HeaderContainer from './HeaderContainer';
import ProfileContainer from './ProfileContainer';
import NavContainer from './NavContainer';
import OptNavContainer from './OptNavContainer';
import FooterContainer from './FooterContainer';
import ModalContainer from './ModalContainer';
import SignUpContainer from './SignUpContainer';
import LogInContainer from './LogInContainer';

const SidebarContainer = () => {
  const [signupModalState, setSignupModalState] = React.useState(false);
  const [loginModalState, setLoginModalState] = React.useState(false);

  const signUp = () => {
    setSignupModalState(true);
  };
  const logIn = () => {
    setLoginModalState(true);
  };
  const closeModal = () => {
    setSignupModalState(false);
    setLoginModalState(false);
  };

  return (
    <Aside bgColor="#101F32">
      <ModalContainer
        isOpen={signupModalState}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick
      >
        <SignUpContainer closeModal={closeModal} />
      </ModalContainer>
      <ModalContainer
        isOpen={loginModalState}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick
      >
        <LogInContainer closeModal={closeModal} />
      </ModalContainer>
      <HeaderContainer />
      <ProfileContainer />
      <div style={{ margin: '20px auto' }}>
        <button
          onClick={signUp}
          style={{
            border: 'none',
            background: '#fff',
            borderRadius: '5px',
            height: '30px',
            marginRight: '5px',
            cursor: 'pointer',
          }}
        >
          зареєструватися
        </button>
        <button
          onClick={logIn}
          style={{
            border: 'none',
            background: '#fff',
            borderRadius: '5px',
            height: '30px',
            cursor: 'pointer',
          }}
        >
          увійти
        </button>
      </div>
      <NavContainer />
      {/* <OptNavContainer /> */}
      <FooterContainer />
    </Aside>
  );
};

export default SidebarContainer;
