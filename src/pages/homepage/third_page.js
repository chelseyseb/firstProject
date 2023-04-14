import Info from '@components/info';
import Student from '@components/student_info'
import Contact from '@components/contact'

export default function RoundedCard() {
    return (
        <>
        <div style={{textAlign: 'center'}}>
            <br></br>
        <h2 >BSIT STUDENT</h2>
        <Info name="Christine Chelsey Sebastian" age="21" />
           <Student address="San Juan City"
           school="PUP Main" course="BSIT"/>
           <Contact number="09157546441"
           email="sbstnchlsy@gmail.com"/>
        </div>
        </>
    );
  }

