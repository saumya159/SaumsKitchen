var React  = require('react');
var Mailto = require('react-mailto');

var Component = React.createClass({
  render: function () {
    return (
      <Mailto email="saumjohn97@gmail.com" obfuscate={true}>
        Email me if you have any queries!
      </Mailto>
    );
  }
});