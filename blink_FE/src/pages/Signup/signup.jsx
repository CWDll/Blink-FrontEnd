import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { LoginNavigates } from "../../components/Login/LoginNavigateBar/LoginNavigates";
import { LoginTitleComponent } from "../../components/Login/LoginForm/LoginTitle";
import { SocialLoginButton } from "../../components/Login/SocialLogin/socialLogins";
import {
  LoginInputComponent,
  LoginButton,
} from "../../components/Login/LoginForm/LoginForm";

//image import
import GoogleIcon from "../../assets/images/google.png";
import KakaoIcon from "../../assets/images/kakao.png";
import NaverIcon from "../../assets/images/naver.png";

import { Line } from "../../components/Login/LoginLine/Line";

function Signup() {
  const [user, setUser] = useState({
    id: "",
    pw: "",
    nickname: "",
  });
  const [pw, setPw] = useState("");
  const [pwMatchMessage, setPwMatchMessage] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user.id:", user.id);
    console.log("user.pw:", user.pw);
    console.log("confirmPw:", confirmPw);
    console.log("user.nickname:", user.nickname);

    e.preventDefault();
    // 모든 칸이 입력되었는가
    if (user.id && user.pw && confirmPw && user.nickname) {
      // 비밀번호 재입력
      if (user.pw !== confirmPw) {
        setPwMatchMessage("비밀번호를 다시 확인해주세요!");
        return;
      }
      try {
        // axios.post("/accounts/signup", user);
        alert("회원가입이 완료되었습니다.");
        navigate("/accounts/signin");
      } catch (error) {
        alert("회원가입에 실패했습니다.");
      }
    } else {
      alert("모든 칸을 입력해주세요 :)");
    }
  };

  // 비밀번호 입력
  const handlePw = (e) => {
    const pw = e.target.value;
    setPw(pw);
    setUser({ ...user, pw: pw });
  };

  // 비밀번호 확인 입력
  const handleConfirmPw = (e) => {
    e.preventDefault();
    const confirmPw = e.target.value;
    setConfirmPw(confirmPw);

    if (confirmPw !== pw) {
      setPwMatchMessage("비밀번호를 다시 확인해주세요!");
    } else {
      setPwMatchMessage("확인 완료되었습니다 :)");
    }
  };

  return (
    <S.SignupWhole>
      <S.SignUpInputContainer onSubmit={handleSubmit}>
        <LoginTitleComponent LogintitleText="Sign up to Blink!" />
        <S.SignUpInputWrapper>
          {/* 아이디 입력 */}
          <LoginInputComponent
            required
            placeholder="사용하실 이메일을 입력해주세요."
            type="email"
            name="id"
            onChange={(e) => setUser({ ...user, id: e.target.value })}
            value={user.id}
            isvaild="true"
            width="30rem"
            height="3rem"
          />
        </S.SignUpInputWrapper>

        {/* 비밀번호 입력 */}
        <S.SignUpInputWrapper>
          <LoginInputComponent
            required
            placeholder="사용하실 비밀번호를 입력해주세요"
            type="password"
            name="pw"
            onChange={handlePw}
            value={user.pw}
            isvaild="true"
            autocomplete="new-password"
            width="30rem"
            height="3rem"
          />
        </S.SignUpInputWrapper>

        {/* 비밀번호 재확인 입력 */}
        <S.SignUpInputWrapper>
          <LoginInputComponent
            required
            placeholder="비밀번호를 다시 한번 입력해주세요"
            type="password"
            name="confirmPw"
            onChange={handleConfirmPw}
            value={confirmPw}
            isvaild={pw === confirmPw ? "true" : "false"}
            autocomplete="new-password"
            width="30rem"
            height="3rem"
          />
          {confirmPw ? (
            pw === confirmPw ? (
              <S.MessageText isvaild="true">확인 완료</S.MessageText>
            ) : (
              <S.MessageText isvaild="false">
                비밀번호가 일치하지 않습니다!
              </S.MessageText>
            )
          ) : (
            ""
          )}
        </S.SignUpInputWrapper>

        {/* 닉네임 입력 */}
        <S.SignUpInputWrapper>
          <LoginInputComponent
            required
            placeholder="사용하실 닉네임을 입력해주세요."
            type="text"
            name="nickname"
            onChange={(e) => setUser({ ...user, nickname: e.target.value })}
            value={user.nickname}
            isvaild="true"
            width="30rem"
            height="3rem"
          />
        </S.SignUpInputWrapper>

        {/* 가입하기 버튼 */}
        <LoginButton type="submit" buttonText="회원가입 완료하기" />

        <Line text="or" margin="30px 0" />
        {/* 소셜로그인 버튼 */}
        <S.SocialLogin>
          <SocialLoginButton
            onClick={() => {
              console.log("구글로그인");
            }}
            socialImg={GoogleIcon}
            socialalt="구글 아이콘"
            socialText="Google"
          />

          <SocialLoginButton
            backgroundColor="#FFE812"
            borderColor="none"
            onClick={() => {
              console.log("카카오톡 로그인");
            }}
            socialImg={KakaoIcon}
            socialalt="카카오 아이콘"
            socialText="kakao"
          />

          <SocialLoginButton
            backgroundColor="#06C755"
            borderColor="none"
            onClick={() => {
              console.log("네이버 로그인");
            }}
            socialImg={NaverIcon}
            socialalt="네이버 아이콘"
            socialText="Naver"
            color="white"
          />
        </S.SocialLogin>
      </S.SignUpInputContainer>
      <LoginNavigates
        LoginNavigatetitle="안녕하세요! Blink입니다!"
        LoginNavigatecotent="처음이신가요? 회원가입하고 멋진 블랙 박스 어쩌구 조정중"
        // handleLoginClick={handleLoginClick}
        buttonText="Login"
      />
    </S.SignupWhole>
  );
}

export default Signup;
