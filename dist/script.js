{/* here is the form with Name and Email address */}

const FormComponent = React.createClass({ displayName: "FormComponent",
  render: function () {
    return /*#__PURE__*/(

      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-md-12" }, /*#__PURE__*/
      React.createElement("form", { action: "index.html", method: "post" }, /*#__PURE__*/
      React.createElement("fieldset", null, /*#__PURE__*/
      React.createElement("label", { htmlFor: "name", style: { color: '#fff', fontSize: '150%' } }, "Name"), /*#__PURE__*/
      React.createElement("input", { type: "text", id: "name", name: "user_name", placeholder: "Your name" }), /*#__PURE__*/
      React.createElement("label", { htmlFor: "email", style: { color: '#fff', fontSize: '150%' } }, "Email address"), /*#__PURE__*/
      React.createElement("input", { type: "email", id: "mail", name: "user_email", placeholder: "Your email adress" })), /*#__PURE__*/

      React.createElement("button", { className: "btn btn-danger center btn-lg btn btn-default", onClick: () => {alert('Work in Progress');} }, "GET STARTED ")))));





  } });


{/* Here is the parent component */}

class Webamboos extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/

      React.createElement("nav", { className: "navbar navbar-inverse navbar-fixed-top" }, /*#__PURE__*/
      React.createElement("div", { className: "container-fluid" }, /*#__PURE__*/
      React.createElement("div", { className: "navbar-header" }, /*#__PURE__*/
      React.createElement("button", { type: "button", className: "navbar-toggle", "data-toggle": "collapse", "data-target": "#myNavbar" }, /*#__PURE__*/
      React.createElement("span", { className: "icon-bar" }), /*#__PURE__*/
      React.createElement("span", { className: "icon-bar" }), /*#__PURE__*/
      React.createElement("span", { className: "icon-bar" })), /*#__PURE__*/

      React.createElement("a", { className: "navbar-brand", href: "#" })), /*#__PURE__*/

      React.createElement("div", { className: "collapse navbar-collapse", id: "myNavbar" }, /*#__PURE__*/
      React.createElement("ul", { className: "nav navbar-nav navbar-right" }, /*#__PURE__*/

      React.createElement("li", null, /*#__PURE__*/
      React.createElement("a", { href: "#Home" }, "ABOUT")), /*#__PURE__*/


      React.createElement("li", null, /*#__PURE__*/
      React.createElement("a", { href: "#About" }, "HOW TO")), /*#__PURE__*/

      React.createElement("li", null, /*#__PURE__*/
      React.createElement("a", { href: "#FAQS" }, "FAQS")), /*#__PURE__*/


      React.createElement("li", null, /*#__PURE__*/
      React.createElement("a", { href: "#Contact", style: { color: '#fff', fontSize: '100%', backgroundColor: '#ff0000' } }, "CONTACT US"))), "'#ff0000'"))), /*#__PURE__*/









      React.createElement("div", { id: "Get", className: "sections container-fluid", style: { color: "#fff" } }, /*#__PURE__*/
      React.createElement("div", { className: "text-center" }, /*#__PURE__*/
      React.createElement("h1", { className: "ast-home-title" }, "Your awesome ", /*#__PURE__*/React.createElement("br", null), "traffic permit ", /*#__PURE__*/React.createElement("br", null), "consultant")), /*#__PURE__*/

      React.createElement("button", { className: "btn btn-danger center btn-lg btn btn-default", onClick: () => {alert('Work in Progress');} }, "GET STARTED")), /*#__PURE__*/



      React.createElement("div", { id: "Home", className: "sections container-fluid" }, /*#__PURE__*/
      React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("img", { src: "https://nadyagr.github.io/Trafico/images/about.svg", className: "floatRight" })), /*#__PURE__*/
      React.createElement("h1", { className: "text-danger" }, "ABOUT US"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/
      React.createElement("p", null, "The occupational traffic permits one of the most ", /*#__PURE__*/React.createElement("br", null), "important things in the company when carrying out ", /*#__PURE__*/React.createElement("br", null), "freight transport. In fact, it is a prerequisite for doing ", /*#__PURE__*/React.createElement("br", null), "business traffic at all."), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/
      React.createElement("h2", { class: "head" }, "How do you do when you need to obtain ", /*#__PURE__*/React.createElement("br", null), " a commercial traffic permit for freight ", /*#__PURE__*/React.createElement("br", null), " transport to your business?")), /*#__PURE__*/




      React.createElement("div", { id: "About", className: "sections container-fluid" }, /*#__PURE__*/
      React.createElement("div", { className: "container" }, /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("h3", null, /*#__PURE__*/React.createElement("strong", { className: "text-danger" }, "HOW TO APPLY"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "When applying for a traffic permit, there are certain ", /*#__PURE__*/
      React.createElement("br", null), " requirements that you must meet that are included in ", /*#__PURE__*/React.createElement("br", null), "the examination: requirements for professional ", /*#__PURE__*/React.createElement("br", null), "knowledge, solid establishment, good reputation and ", /*#__PURE__*/React.createElement("br", null), "financial resources, important to remember is to confirm ", /*#__PURE__*/React.createElement("br", null), "your application for a traffic permit by the company's ", /*#__PURE__*/React.createElement("br", null), "company signer or CEO.")))), /*#__PURE__*/






      React.createElement("div", { className: "questions" }, /*#__PURE__*/React.createElement("h1", { className: "text-danger" }, "FAQ ", /*#__PURE__*/React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("img", { src: "https://nadyagr.github.io/Trafico/images/header-img.svg", className: "floatRight" }))), " ", /*#__PURE__*/React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("img", { src: "https://nadyagr.github.io/Trafico/images/faq-img.svg", className: "floatRight" })), /*#__PURE__*/
      React.createElement("h1", null, "Questions and Answers ", /*#__PURE__*/React.createElement("br", null), "on Professional Traffic", /*#__PURE__*/React.createElement("br", null), " Permits:")), /*#__PURE__*/


      React.createElement("div", { id: "FAQS", className: "sections container-fluid" }, /*#__PURE__*/
      React.createElement("div", { className: "accordion" }, /*#__PURE__*/

      React.createElement("div", { className: "accordion-item", id: "question1" }, /*#__PURE__*/
      React.createElement("a", { className: "accordion-link ", href: "#question1" }, "What is a professional traffic permit?", /*#__PURE__*/

      React.createElement("ion-icon", { name: "add-outline" }), /*#__PURE__*/
      React.createElement("ion-icon", { name: "remove-outline" })), /*#__PURE__*/


      React.createElement("div", { className: "answer" }, /*#__PURE__*/
      React.createElement("p", null, " Traffic permits are a requirement for conducting professional traffic"))), /*#__PURE__*/



      React.createElement("div", { className: "accordion-item", id: "question2" }, /*#__PURE__*/
      React.createElement("a", { className: "accordion-link", href: "#question2" }, "When is a professional traffic permit needed?", /*#__PURE__*/

      React.createElement("ion-icon", { name: "add-outline" }), /*#__PURE__*/
      React.createElement("ion-icon", { name: "remove-outline" })), /*#__PURE__*/

      React.createElement("div", { className: "answer" }, /*#__PURE__*/
      React.createElement("p", null, "Traffic permits are a requirement for conducting professional traffic."))), /*#__PURE__*/


      React.createElement("br", null), /*#__PURE__*/

      React.createElement("div", { className: "accordion-item", id: "question3" }, /*#__PURE__*/
      React.createElement("a", { className: "accordion-link", href: "#question3" }, "How to check the traffic conditions?", /*#__PURE__*/

      React.createElement("ion-icon", { name: "add-outline" }), /*#__PURE__*/
      React.createElement("ion-icon", { name: "remove-outline" })), /*#__PURE__*/


      React.createElement("div", { className: "answer" }, /*#__PURE__*/
      React.createElement("p", null, " Traffic permits are a requirement for conducting professional traffic."))), /*#__PURE__*/



      React.createElement("div", { className: "accordion-item", id: "question4" }, /*#__PURE__*/
      React.createElement("a", { className: "accordion-link", href: "#question4" }, "Where to look for a traffic permit?", /*#__PURE__*/

      React.createElement("ion-icon", { name: "add-outline" }), /*#__PURE__*/
      React.createElement("ion-icon", { name: "remove-outline" })), /*#__PURE__*/


      React.createElement("div", { className: "answer" }, /*#__PURE__*/
      React.createElement("p", null, " Traffic permits are a requirement for conducting professional traffic. "))), /*#__PURE__*/


      React.createElement("br", null), /*#__PURE__*/

      React.createElement("div", { className: "accordion-item", id: "question5" }, /*#__PURE__*/
      React.createElement("a", { className: "accordion-link", href: "#question5" }, "What are the requirements for a professional traffic permit?", /*#__PURE__*/

      React.createElement("ion-icon", { name: "add-outline" }), /*#__PURE__*/
      React.createElement("ion-icon", { name: "remove-outline" })), /*#__PURE__*/


      React.createElement("div", { className: "answer" }, /*#__PURE__*/
      React.createElement("p", null, " Traffic permits are a requirement for conducting professional traffic. "))), /*#__PURE__*/



      React.createElement("div", { className: "accordion-item", id: "question6" }, /*#__PURE__*/
      React.createElement("a", { className: "accordion-link", href: "#question6" }, "Are there differences between a traffic permit and a professional traffic permit?", /*#__PURE__*/

      React.createElement("ion-icon", { name: "add-outline" }), /*#__PURE__*/
      React.createElement("ion-icon", { name: "remove-outline" })), /*#__PURE__*/


      React.createElement("div", { className: "answer" }, /*#__PURE__*/
      React.createElement("p", null, " Traffic permits are a requirement for conducting professional traffic."))), /*#__PURE__*/


      React.createElement("br", null), /*#__PURE__*/

      React.createElement("div", { className: "accordion-item", id: "question7" }, /*#__PURE__*/
      React.createElement("a", { className: "accordion-link", href: "#question7" }, "Are there professional traffic permit training courses at a distance?", /*#__PURE__*/

      React.createElement("ion-icon", { name: "add-outline" }), /*#__PURE__*/
      React.createElement("ion-icon", { name: "remove-outline" })), /*#__PURE__*/


      React.createElement("div", { className: "answer" }, /*#__PURE__*/
      React.createElement("p", null, " Traffic permits are a requirement for conducting professional traffic. "))), /*#__PURE__*/



      React.createElement("div", { className: "accordion-item", id: "question8" }, /*#__PURE__*/
      React.createElement("a", { className: "accordion-link", href: "#question8" }, "How much does a commercial traffic permit cost for goods?", /*#__PURE__*/

      React.createElement("ion-icon", { name: "add-outline" }), /*#__PURE__*/
      React.createElement("ion-icon", { name: "remove-outline" })), /*#__PURE__*/


      React.createElement("div", { className: "answer" }, /*#__PURE__*/
      React.createElement("p", null, " Traffic permits are a requirement for conducting professional traffic. "))), /*#__PURE__*/


      React.createElement("br", null), /*#__PURE__*/

      React.createElement("div", { className: "accordion-item", id: "question9" }, /*#__PURE__*/
      React.createElement("a", { className: "accordion-link", href: "#question9" }, "How to plug in for the traffic permit test?", /*#__PURE__*/

      React.createElement("ion-icon", { name: "add-outline" }), /*#__PURE__*/
      React.createElement("ion-icon", { name: "remove-outline" })), /*#__PURE__*/


      React.createElement("div", { className: "answer" }, /*#__PURE__*/
      React.createElement("p", null, " Traffic permits are a requirement for conducting professional traffic. "))), /*#__PURE__*/



      React.createElement("div", { className: "accordion-item", id: "question10" }, /*#__PURE__*/
      React.createElement("a", { className: "accordion-link", href: "#question10" }, "How is the sample for a professional traffic permit booked?", /*#__PURE__*/

      React.createElement("ion-icon", { name: "add-outline" }), /*#__PURE__*/
      React.createElement("ion-icon", { name: "remove-outline" })), /*#__PURE__*/


      React.createElement("div", { className: "answer" }, /*#__PURE__*/
      React.createElement("p", null, " Traffic permits are a requirement for conducting professional traffic. "))), /*#__PURE__*/



      React.createElement("button", { className: "btn btn-danger center btn-lg btn btn-default", onClick: () => {alert('Work in Progress');} }, "LOAD MORE"))), /*#__PURE__*/






      React.createElement("div", { id: "Contact", className: "sections container-fluid" }, /*#__PURE__*/React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("img", { src: "https://nadyagr.github.io/Trafico/images/footer-img.svg", className: "floatLeft" })), /*#__PURE__*/
      React.createElement("div", { className: "ast-about-title", style: { color: '#E1E1E1' } }, /*#__PURE__*/React.createElement("h4", { style: { color: '#fff', fontSize: '50%' } }, "We provide traffic management", /*#__PURE__*/React.createElement("br", null), " consultants so you get started ", /*#__PURE__*/React.createElement("br", null), "quickly, contact us for a quote ", /*#__PURE__*/React.createElement("br", null), "today!  ")), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/
      React.createElement("div", { className: "margin-left:auto" }, /*#__PURE__*/



      React.createElement(FormComponent, null), " "), " ", /*#__PURE__*/React.createElement("br", null), " ", /*#__PURE__*/React.createElement("br", null), " ", /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/


      React.createElement("div", { className: "text-right" }, /*#__PURE__*/
      React.createElement("a", { href: "#Home", style: { color: '#0D4F8B', fontSize: '150%' } }, "ABOUT"), "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0", /*#__PURE__*/
      React.createElement("a", { href: "#About", style: { color: '#0D4F8B', fontSize: '150%' } }, "HOW TO"), "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0", /*#__PURE__*/

      React.createElement("a", { href: "#FAQS", style: { color: '#0D4F8B', fontSize: '150%' } }, "FAQS")), /*#__PURE__*/

      React.createElement("br", null), /*#__PURE__*/

      React.createElement("div", { className: "text-left" }, "\xA0\xA0 Copyright @ 2009", /*#__PURE__*/

      React.createElement("div", { className: "text-right" }, /*#__PURE__*/
      React.createElement("a", { className: "btn btn-default", href: "#", target: "_blank" }, /*#__PURE__*/
      React.createElement("span", { className: "fa-fa-facebook" }, /*#__PURE__*/
      React.createElement("i", { className: "fa fa-facebook", style: { color: '#ff0000', fontSize: '200%' } }))), "\xA0\xA0\xA0", /*#__PURE__*/



      React.createElement("a", { className: "btn btn-default", href: "#", target: "_blank" }, /*#__PURE__*/
      React.createElement("span", { className: "fa-fa-twitter" }, /*#__PURE__*/
      React.createElement("i", { className: "fa fa-twitter ", style: { color: '#ff0000', fontSize: '200%' } }))), "\xA0\xA0\xA0", /*#__PURE__*/



      React.createElement("a", { className: "btn btn-default", href: "#", target: "_blank" }, /*#__PURE__*/
      React.createElement("i", { className: "fa fa-linkedin fa-2x", style: { color: '#ff0000', fontSize: '200%' } }))))));





  }}



ReactDOM.render( /*#__PURE__*/React.createElement(Webamboos, null), document.getElementById('challenge'));