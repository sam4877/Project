import { useRef } from "react";

const FormInput5 = () => {
    const input_id = useRef('');
    const input_pw = useRef('');
    const input_jumin1 = useRef('');
    const input_jumin2 = useRef('');
    const input_tel1 = useRef('');
    const input_tel2 = useRef('');
    const input_tel3 = useRef('');
    const input_btn = useRef('');

  const onChange = (e) => {
        console.log(e.target.name, ":", e.target.value)
      };

    const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (e.target.name === "id") {
        this.input_pw.current.focus();
      } else if (e.target.name === "pw") {
        this.input_jumin1.current.focus();
      } else if (e.target.name === "jumin1") {
        this.input_jumin2.current.focus();
      } else if (e.target.name === "jumin2") {
        this.input_tel1.current.focus();
      } else if (e.target.name === "tel1") {
        this.input_tel2.current.focus();
      } else if (e.target.name === "tel2") {
        this.input_tel3.current.focus();
      } else if (e.target.name === "tel3") {
        this.input_btn.current.focus();
      }
    }
  };

  const onClick = () => {
    alert(
      "아이디:" +
        input_id.current.value +
        "\n" +
        "비밀번호:" +
        input_pw.current.value +
        "\n" +
        "주민번호:" +
        input_jumin1.current.value +
        "-" +
        input_jumin2.current.value +
        "\n" +
        "전화번호:" +
        input_tel1.current.value +
        "-" +
        input_tel2.current.value +
        "-" +
        input_tel3.current.value
    );

    input_id.current.value= "";
    input_pw.current.value= "";
    input_jumin1.current.value= "";
    input_jumin2.current.value= "";
    input_tel1.current.value= "";
    input_tel2.current.value= "";
    input_tel3.current.value= "";
};
return (
    <div>
      <center>
        <h1>회원 가입</h1>
      </center>
      <table ALIGN="center" border="1">
        <tr>
          <td>아이디</td>
          <td>
            <input
              size="10"
              type="text"
              name="id"
              placeholder="아이디"
              onChange={onChange}
              onKeyPress={handleKeyPress}
              ref={input_id}
            />
          </td>
        </tr>
        <tr>
          <td>비밀번호</td>
          <td>
            <input
              size="10"
              type="password"
              name="pw"
              placeholder="패스워드"
              onChange={onChange}
              onKeyPress={handleKeyPress}
              ref={input_pw}
            />
          </td>
        </tr>
        <tr>
          <td>주민번호</td>
          <td>
            <input
              size="6"
              type="text"
              name="jumin1"
              placeholder="앞자리6자리"
              onChange={onChange}
              onKeyPress={handleKeyPress}
              ref={input_jumin1}
            />
            -
            <input
              size="7"
              type="text"
              name="jumin2"
              placeholder="뒷자리7자리"
              onChange={onChange}
              onKeyPress={handleKeyPress}
              ref={input_jumin2}
            />
          </td>
        </tr>
        <tr>
          <td>전화번호</td>
          <td>
            <input
              size="3"
              type="text"
              name="tel1"
              placeholder="3자리"
              onChange={onChange}
              onKeyPress={handleKeyPress}
              ref={input_tel1}
            />
            -
            <input
              size="4"
              type="text"
              name="tel2"
              placeholder="4자리"
              onChange={onChange}
              onKeyPress={handleKeyPress}
              ref={input_tel2}
            />
            -
            <input
              size="4"
              type="text"
              name="tel3"
              placeholder="4자리"
              onChange={onChange}
              onKeyPress={handleKeyPress}
              ref={input_tel3}
            />
          </td>
        </tr>
        <tr>
          <td colSpan="2" ALIGN="center">
            <button onClick={onClick} ref={input_btn}>
              확인
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default FormInput5;