import { Component } from "react";

class FormInput3 extends Component {
  onChange = (e) => {
    console.log(e.target.name, ":", e.target.value)
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (e.target.name === "id") {
        this.input_pw.focus();
      } else if (e.target.name === "pw") {
        this.input_jumin1.focus();
      } else if (e.target.name === "jumin1") {
        this.input_jumin2.focus();
      } else if (e.target.name === "jumin2") {
        this.input_tel1.focus();
      } else if (e.target.name === "tel1") {
        this.input_tel2.focus();
      } else if (e.target.name === "tel2") {
        this.input_tel3.focus();
      } else if (e.target.name === "tel3") {
        this.input_btn.focus();
      }
    }
  };

  onClick = () => {
    alert(
      "아이디:" +
        this.input_id.value +
        "\n" +
        "비밀번호:" +
        this.input_pw.value +
        "\n" +
        "주민번호:" +
        this.input_jumin1.value +
        "-" +
        this.input_jumin2.value +
        "\n" +
        "전화번호:" +
        this.input_tel1.value +
        "-" +
        this.input_tel2.value +
        "-" +
        this.input_tel3.value
    );
    
      this.input_id.value= "";
      this.input_pw.value= "";
      this.input_jumin1.value= "";
      this.input_jumin2.value= "";
      this.input_tel1.value= "";
      this.input_tel2.value= "";
      this.input_tel3.value= "";
  };
  render() {
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
                value
                onChange={this.onChange}
                onKeyPress={this.handleKeyPress}
                ref={(ref) => {
                  this.input_id = ref;
                }}
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
                value
                onChange={this.onChange}
                onKeyPress={this.handleKeyPress}
                ref={(ref) => {
                  this.input_pw = ref;
                }}
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
                value
                onChange={this.onChange}
                onKeyPress={this.handleKeyPress}
                ref={(ref) => {
                  this.input_jumin1 = ref;
                }}
              />
              -
              <input
                size="7"
                type="text"
                name="jumin2"
                placeholder="뒷자리7자리"
                value
                onChange={this.onChange}
                onKeyPress={this.handleKeyPress}
                ref={(ref) => {
                  this.input_jumin2 = ref;
                }}
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
                value
                onChange={this.onChange}
                onKeyPress={this.handleKeyPress}
                ref={(ref) => {
                  this.input_tel1 = ref;
                }}
              />
              -
              <input
                size="4"
                type="text"
                name="tel2"
                placeholder="4자리"
                value
                onChange={this.onChange}
                onKeyPress={this.handleKeyPress}
                ref={(ref) => {
                  this.input_tel2 = ref;
                }}
              />
              -
              <input
                size="4"
                type="text"
                name="tel3"
                placeholder="4자리"
                value
                onChange={this.onChange}
                onKeyPress={this.handleKeyPress}
                ref={(ref) => {
                  this.input_tel3 = ref;
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2" ALIGN="center">
              <button
                onClick={this.onClick}
                ref={(ref) => {
                  this.input_btn = ref;
                }}
              >
                확인
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default FormInput3;
