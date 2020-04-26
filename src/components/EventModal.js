import React from 'react';


function EventModal() {

    // Master Habit Event List
    const [habitEventList, setHabitEventList] = useState([]);

    // Modal Stuff
    const [modal, setModal] = useState(false);
    const [dateTitle, setDateTitle] = useState('');
  
    function toggle(value) {
      let datePartial = value.toString().slice(0,15)
      setDateTitle(`${datePartial}`);
      setModal(!modal);
    }

    return (
      <div className='myForest'>
        <Modal isOpen={modal} toggle={toggle} >
        <div className='eventModal'>
          <p>the sweet day of {dateTitle.toLowerCase()} deserves the following</p>
          <Form onSubmit={handleAddHabitEvent}>
            <div className='modalButtons'>
            <ButtonGroup>
              <Button className='modalButton modalTreeButton' onClick={() => onCheckboxBtnClick('a tree')} active={cSelected.includes(1)}>Add a tree :)</Button>
              <Button className='modalButton modalFlowerButton' onClick={() => onCheckboxBtnClick('a flower')} active={cSelected.includes(2)}>Flower Me</Button>
              <Button className='modalButton' onClick={() => onCheckboxBtnClick('some grass')} active={cSelected.includes(3)}>Grass</Button>
            </ButtonGroup>
          </div>

            <Input
              type="text"
              name="specialNote"
              onChange={e=> setSpecialNote(e.target.value)}
              placeholder="special note?" />
            <button className='submitModal' type='submit' value='submit'>true</button>

          </Form>
          <div className='selectedModals'>
            <h5>lovely</h5>
            <h5>{cSelected[0]}</h5>
            <h5>{cSelected[1]}</h5>
            <h5>{cSelected[2]}</h5>
          </div>
        </div>
        </Modal>
      </div>
    );
}

export default EventModal; 

<Modal isOpen={modal} toggle={toggle} >
<div className='eventModal'>
  <p>the sweet day of {dateTitle.toLowerCase()} deserves the following</p>
  <Form onSubmit={handleAddHabitEvent}>
    <div className='modalButtons'>
    <ButtonGroup>
      <Button className='modalButton modalTreeButton' onClick={() => onCheckboxBtnClick('a tree')} active={cSelected.includes(1)}>Add a tree :)</Button>
      <Button className='modalButton modalFlowerButton' onClick={() => onCheckboxBtnClick('a flower')} active={cSelected.includes(2)}>Flower Me</Button>
      <Button className='modalButton' onClick={() => onCheckboxBtnClick('some grass')} active={cSelected.includes(3)}>Grass</Button>
    </ButtonGroup>
  </div>

    <Input
      type="text"
      name="specialNote"
      onChange={e=> setSpecialNote(e.target.value)}
      placeholder="special note?" />
    <button className='submitModal' type='submit' value='submit'>true</button>

  </Form>
  <div className='selectedModals'>
    <h5>lovely</h5>
    <h5>{cSelected[0]}</h5>
    <h5>{cSelected[1]}</h5>
    <h5>{cSelected[2]}</h5>
  </div>
</div>
</Modal>