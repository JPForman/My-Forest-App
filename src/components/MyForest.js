import React from 'react';

//style sheets
import '../css/myForest.css'

function MyForest() {
    
    return (
      <div className='myForest'>

        <div className='sky'></div>
        <div className='sun'></div>
        <div className='ground'></div>
       
      </div>
    );
}

export default MyForest; 


{/* <div className='treeSet'>
<TreeSet habitEventList={habitEventList}/>
</div>

<div className='grassSet'>
<GrassSet habitEventList={habitEventList}/>
</div>

<div className='flowerSet'>
<FlowerSet habitEventList={habitEventList}/>
</div> */}