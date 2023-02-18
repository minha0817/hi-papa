import React, {useState, useEffect} from "react";

const stylingObject = {
  outerDiv: {
    display: "flex",
    margin: 20,
  },
  innerDiv: {
    margin: 10
  },
  img: {
    width: 70, 
    height: 70, 
    borderRadius: "50%"
  }
}

export default function ChildrenList () {

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getChildren();
  }, [])

  const getChildren = () => {
    setLoading(true)
    fetch('/api/children/get')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }

  if(isLoading) return <p>Loading...</p>
  if(!data) return <p>No Children data</p>

  return (
    <div style={stylingObject.outerDiv}>
      {data && 
        data.map((item) => {
          return (
            <ul key={item.CHILDREN_ID} style={stylingObject.innerDiv}>
              <img src={item.CHILDREN_PICTURE} style={stylingObject.img}></img>
              <p>{item.CHILDREN_FIRST_NAME}</p>
            </ul>
          )
        })
      }
    </div>
  )
}