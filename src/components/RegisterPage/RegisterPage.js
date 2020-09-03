import React, { Component } from 'react';
import {connect} from 'react-redux';

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password && (this.state.password === this.state.confirm_password) ) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form onSubmit={this.registerUser}>
          <h1>Register</h1>
          <h4>Required*</h4>
          <div>
            <label htmlFor="username">
              Username*
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password*
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
            </div>
            <div>
            <label htmlFor="confirm_password">
              Confirm Password*
              <input
                type="confirm_password"
                name="confirm_password"
                value={this.state.confirm_password}
                onChange={this.handleInputChangeFor('confirm_password')}
              />
            </label>
            </div>
            <div>
            <label htmlFor="first_name">
              First Name*
              <input
                type="first_name"
                name="first_name"
                value={this.state.first_name}
                onChange={this.handleInputChangeFor('first_name')}
              />
            </label>
            </div>
            <div>
            <label htmlFor="last_name">
              Last Name*
              <input
                type="last_name"
                name="last_name"
                value={this.state.last_name}
                onChange={this.handleInputChangeFor('last_name')}
              />
            </label>
            </div>
            <div>
            <label htmlFor="email">
              Email*
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChangeFor('email')}
              />
            </label>
            </div>
            <div>
            <label htmlFor="state">
              State*
                <select onChange={this.handleInputChangeFor('state')}>
                <option value=""></option>
                  <option value="AL">AL</option>
                  <option value="AK">AK</option>
                  <option value="AR">AR</option>
                  <option value="AZ">AZ</option>
                  <option value="CA">CA</option>
                  <option value="CO">CO</option>
                  <option value="CT">CT</option>
                  <option value="DE">DE</option>
                  <option value="FL">FL</option>
                  <option value="GA">GA</option>
                  <option value="HI">HI</option>
                  <option value="IA">IA</option>
                  <option value="ID">ID</option>
                  <option value="IL">IL</option>
                  <option value="IN">IN</option>
                  <option value="KS">KS</option>
                  <option value="KY">KY</option>
                  <option value="LA">LA</option>
                  <option value="MA">MA</option>
                  <option value="MD">MD</option>
                  <option value="ME">ME</option>
                  <option value="MI">MI</option>
                  <option value="MN">MN</option>
                  <option value="MO">MO</option>
                  <option value="MS">MS</option>
                  <option value="MT">MT</option>
                  <option value="NC">NC</option>
                  <option value="ND">ND</option>
                  <option value="NE">NE</option>
                  <option value="NH">NH</option>
                  <option value="NJ">NJ</option>
                  <option value="NM">NM</option>
                  <option value="NV">NV</option>
                  <option value="NY">NY</option>
                  <option value="OH">OH</option>
                  <option value="OK">OK</option>
                  <option value="OR">OR</option>
                  <option value="PA">PA</option>
                  <option value="RI">RI</option>
                  <option value="SC">SC</option>
                  <option value="SD">SD</option>
                  <option value="TN">TN</option>
                  <option value="TX">TX</option>
                  <option value="UT">UT</option>
                  <option value="VA">VA</option>
                  <option value="VT">VT</option>
                  <option value="WA">WA</option>
                  <option value="WI">WI</option>
                  <option value="WV">WV</option>
                  <option value="WY">WY</option>
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="age">
                Age*
                <select onChange={this.handleInputChangeFor('age')}>
                  <option value=""></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                  <option value="32">32</option>
                  <option value="33">33</option>
                  <option value="34">34</option>
                  <option value="35">35</option>
                  <option value="36">36</option>
                  <option value="37">37</option>
                  <option value="38">38</option>
                  <option value="39">39</option>
                  <option value="40">40</option>
                  <option value="41">41</option>
                  <option value="42">42</option>
                  <option value="43">43</option>
                  <option value="44">44</option>
                  <option value="45">45</option>
                  <option value="46">46</option>
                  <option value="47">47</option>
                  <option value="48">48</option>
                  <option value="49">49</option>
                  <option value="50">50</option>
                  <option value="51">51</option>
                  <option value="52">52</option>
                  <option value="53">53</option>
                  <option value="54">54</option>
                  <option value="55">55</option>
                  <option value="56">56</option>
                  <option value="57">57</option>
                  <option value="58">58</option>
                  <option value="59">59</option>
                  <option value="60">60</option>
                  <option value="61">61</option>
                  <option value="62">62</option>
                  <option value="63">63</option>
                  <option value="64">64</option>
                  <option value="65">65</option>
                  <option value="66">66</option>
                  <option value="67">67</option>
                  <option value="68">68</option>
                  <option value="69">69</option>
                  <option value="70">70</option>
                  <option value="71">71</option>
                  <option value="72">72</option>
                  <option value="73">73</option>
                  <option value="74">74</option>
                  <option value="75">75</option>
                  <option value="76">76</option>
                  <option value="77">77</option>
                  <option value="78">78</option>
                  <option value="79">79</option>
                  <option value="80">80</option>
                  <option value="81">81</option>
                  <option value="82">82</option>
                  <option value="83">83</option>
                  <option value="84">84</option>
                  <option value="85">85</option>
                  <option value="86">86</option>
                  <option value="87">87</option>
                  <option value="88">88</option>
                  <option value="89">89</option>
                  <option value="90">90</option>
                  <option value="91">91</option>
                  <option value="92">92</option>
                  <option value="93">93</option>
                  <option value="94">94</option>
                  <option value="95">95</option>
                  <option value="96">96</option>
                  <option value="97">97</option>
                  <option value="98">98</option>
                  <option value="99">99</option>
                  <option value="100">100</option>
                </select>
              </label>
            </div>
            <div>
              <lable htmlFor="ethnicity">
                Ethnicity*
                  <select onChange={this.handleInputChangeFor('ethnicity')}>
                  <option value=""></option>
                  <option value="1">Asian - Chinese</option>
                  <option value="2">Asian - Filipino</option>
                  <option value="3">Asian - Asian Indian</option>
                  <option value="4">Asian - Vietnamese</option>
                  <option value="5">Asian - Korean</option>
                  <option value="6">Asian - Japanese</option>
                  <option value="7">Asian - Other Asian</option>
                  <option value="8">Black or African American</option>
                  <option value="9">Native Hawaiian and Pacific Islander</option>
                  <option value="10">Native Hawaiian</option>
                  <option value="11">Pacific Islander - Samoan</option>
                  <option value="12">Pacific Islander - Chamorro</option>
                  <option value="13">Pacific Islander - Other</option>
                  <option value="14">White</option>
                  <option value="15">Some Other Race</option>
                </select>
              </lable>
            </div>
            <div>
              <lable htmlFor="gender">
                Gender*
                <select onChange={this.handleInputChangeFor('gender')}>
                  <option value=""></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </lable>
            </div>
            <div>
              <lable htmlFor="income">
                Income*
                <select onChange={this.handleInputChangeFor('income')}>
                  <option value=""></option>
                  <option value="1">$0 - $10,000</option>
                  <option value="2">10,001 - $20,000</option>
                  <option value="3">$20,001 - $30,000</option>
                  <option value="4">30,001 - $40,000</option>
                  <option value="5">$40,001 - $50,000</option>
                  <option value="6">$50,001 - $60,000</option>
                  <option value="7">$60,001 - $70,000</option>
                  <option value="8">$70,001 - $80,000</option>
                  <option value="9">$80,001 - $90,000</option>
                  <option value="10">$90,001 - $100,000</option>
                  <option value="11">$100,000+</option>
                </select>
              </lable>
            </div>
            <div>
              <lable>
                Education Level*
                <select onChange={this.handleInputChangeFor('education_level')}>
                  <option value=""></option>
                  <option value="1">Some High School</option>
                  <option value="2">High School</option>
                  <option value="3">Certification</option>
                  <option value="4">Some College School</option>
                  <option value="5">Associate</option>
                  <option value="6">Bachelor's</option>
                  <option value="7">Master's</option>
                  <option value="8">Doctorate</option>
                  <option value="9">Professional</option>
                </select>
              </lable>
            </div>

          <div>
            <input
              className="register"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </form>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}
          >
            Login
          </button>
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);

