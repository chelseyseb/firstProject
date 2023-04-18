import FormsFormik from "@components/forms-formik";
// import Forms from "@components/forms/forms";

const styles = {
    screen: {
        height: "100%",
        marginTop: "100px",
    },

    h2: {
        marginLeft: "10px"
    },

    p: {
        marginLeft: "10px"
    },
    container: {
        backgroundColor: "whitesmoke",
        width: "30%",
        height: "100%",
        margin: "auto",
        color: "black",
        borderRadius: "5px",
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