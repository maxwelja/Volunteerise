import React,{useState, useEffect} from 'react';
import '../styles/EventList.css';
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai';
import {BsCheckLg} from 'react-icons/bs';
import NavBar from '../components/NavBar';

function EventList() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allEvents, setEvents] = useState ([]);
  const [newTitle, setNewTitle] = useState ('');
  const [newDescription, setNewDescription] = useState ('');
  const [completedEvents, setCompletedEvents] = useState ([]);
  const [currentEdit,setCurrentEdit] = useState("");
  const [currentEditedItem,setCurrentEditedItem] = useState("");
  
    const performAddEvent = () => {
        let newEventItem = {
          title: newTitle,
          description: newDescription,
        };
    

      let updatedEventArr = [...allEvents];
      updatedEventArr.push (newEventItem);
      setEvents (updatedEventArr);
      localStorage.setItem('eventlist', JSON.stringify(updatedEventArr))
    };

    const performDeleteEvent = index => {
      let reducedEvent = [...allEvents];
      reducedEvent.splice(index);

      localStorage.setItem('eventlist', JSON.stringify (reducedEvent));
      setEvents(reducedEvent);
    };

    const handleComplete = index => {
      let now = new Date ();
      let dd = now.getDate ();
      let mm = now.getMonth () + 1;
      let yyyy = now.getFullYear ();
     
      let completedOn =
        dd + '-' + mm + '-' + yyyy;
  
      let filteredItem = {
        ...allEvents[index],
        completedOn: completedOn,
      };
  
      let updatedCompletedArr = [...completedEvents];
      updatedCompletedArr.push (filteredItem);
      setCompletedEvents (updatedCompletedArr);
      performDeleteEvent (index);
      localStorage.setItem (
        'completedTodos',
        JSON.stringify (updatedCompletedArr)
      );
    };

    const performDeleteCompletedEvent = index => {
      let reducedEvent = [...completedEvents];
      reducedEvent.splice (index);
  
      localStorage.setItem ('completedEvent', JSON.stringify (reducedEvent));
      setCompletedEvents (reducedEvent);
    };

    useEffect (() => {
      let savedEvent = JSON.parse (localStorage.getItem ('eventlist'));
      let savedCompletedEvent = JSON.parse (
        localStorage.getItem ('completedTodos')
      );
      if (savedEvent) {
        setEvents (savedEvent);
      }
  
      if (savedCompletedEvent) {
        setCompletedEvents (savedCompletedEvent);
      }
    }, []);

    const handleEdit = (ind,item)=>{
      console.log(ind);
      setCurrentEdit(ind);
      setCurrentEditedItem(item);
    }
  
    const handleUpdateTitle = (value)=>{
      setCurrentEditedItem((prev)=>{
        return {...prev,title:value}
      })
    }
  
    const handleUpdateDescription = (value)=>{
      setCurrentEditedItem((prev)=>{
        return {...prev,description:value}
      })
    }
  
    const handleUpdateEvent = ()=>{
        let newEvents = [...allEvents];
        newEvents[currentEdit] = currentEditedItem;
        setEvents(newEvents);
        setCurrentEdit("");
    }
  

  return(
    <>
    <NavBar />
    <div className="App">
      <div className='EventList-wrapper'>
        <div className = 'EventList-Input' >
          <div className = 'EventList-Input-Item'>
            <label>Title</label>
            <input
             type="text" value={newTitle} onChange={e => setNewTitle (e.target.value)} 
            placeholder="Title of Task: " />
          </div>

          <div className = 'EventList-Input-Item'>
            <label>Date</label>
            <input type="text" value={newDescription}
              onChange={e => setNewDescription (e.target.value)} placeholder="Date: MM/DD/YYYY " />
          </div>

          <div className = 'EventList-Input-Item'>
          <button
              type="button"
              onClick={performAddEvent}
              className="primaryBtn"
            >
              Add Event
            </button>
          </div>
        </div>

        <div className = 'btn-area' >
          <button 
            className = {`secondaryBtn ${isCompleteScreen === false && 'active'}`} 
            onClick={()=>setIsCompleteScreen(false)}>Upcoming
          </button>

          <button 
            className = {`secondaryBtn ${isCompleteScreen === true && 'active'}`} 
            onClick={()=>setIsCompleteScreen(true)}>Completed
          </button>
        </div>  

      
        <div className = 'Upcoming-List'>
        {isCompleteScreen === false &&
            allEvents.map ((item, index) => {
              if(currentEdit===index){
                 return(
                  <div className='edit__wrapper' key={index}>
                  <input placeholder='Updated Title' 
                  onChange={(e)=>handleUpdateTitle(e.target.value)} 
                  value={currentEditedItem.title}  />
                  <textarea placeholder='Updated Title' 
                  rows={4}
                  onChange={(e)=>handleUpdateDescription(e.target.value)} 
                  value={currentEditedItem.description}  />
                   <button
              type="button"
              onClick={handleUpdateEvent}
              className="primaryBtn"
            >
              Update
            </button>
              </div> 
                 ) 
              }else{
                return (
                  <div className="Upcoming-List" key={index}>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
  
                    <div>
                      <AiOutlineDelete
                        className="icon"
                        onClick={() => performDeleteEvent (index)}
                        title="Delete?"
                      />
                      <BsCheckLg
                        className="check-icon"
                        onClick={() => handleComplete (index)}
                        title="Complete?"
                      />
                      <AiOutlineEdit  className="check-icon"
                        onClick={() => handleEdit (index,item)}
                        title="Edit?" />
                    </div>
  
                  </div>
                );
              }
              
            })}

            {isCompleteScreen === true && completedEvents.map ((item, index) => {
              return (
                <div className="Upcoming-List-Item" key={index}> 
                  <div> 
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p><small>Completed on: {item.completedOn}</small></p>
                  </div>
                

                <div>
                  <AiOutlineDelete
                    className="icon"
                    onClick={() => performDeleteCompletedEvent (index)}
                    title="Delete?" 
                    />
                </div> 
              </div>

            );
          })}
              
        </div> 
      </div>
    </div>
    </>
  );
}

export default EventList;