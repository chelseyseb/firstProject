import FormsFormik from "@components/forms-formik";
// import Forms from "@components/forms/forms";

const styles = {
    screen: {
        height: "100%",
        backgroundColor: "white",
    },

    h2: {
        marginLeft: "10px",
        fontFamily: "SFProDisplay-Bold, Helvetica, Arial, sans-serif",
    },

    p: {
        marginLeft: "10px",
        fontFamily: "SFProText-Regular, Helvetica, Arial, sans-serif",
    },
    container: {
        backgroundColor: "whitesmoke",
        width: "450px",
        height: "auto",
        margin: "auto",
        color: "black",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "1px 15px 50px 1px grey",
        borderRadius: "10px",
        padding: "15px",
              
    },
    hr: {
        borderTop: "2px solid #bbb",
        marginLeft: "5px"
      }
}

const FormsContainer = () => {
  return (
    <div style={styles.screen}>
    <div style={styles.container}>
      {/* <p>Normal Form</p>
      <Forms /> */}
      <br />
      <h2 style={styles.h2}>Sign Up</h2>
      <p style={styles.h2}>It’s quick and easy.</p>
      <hr class="hr" style={styles.hr}></hr>
      <FormsFormik />
    </div></div>
  );
};

export default FormsContainer;