import emotionStyled from "@emotion/styled";
import { useGetVans } from "../hooks/useGetVans";

export default function Users() {
  const {data} = useGetVans({})

  const vanElements = data?.data?.vans?.map(van => (
    <div key={van.id} className="van-tile">
        <img alt={van.name} src={van.imageUrl} />
        <div className="van-info">
            <h3>{van.name}</h3>
            <p>${van.price}<span>/day</span></p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
))

return (
    <Container>
        <div className="van-list">
            {vanElements}
        </div>
    </Container>
)
}

const Container = emotionStyled.div`
padding-inline: 23px

.van-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 34px;
  margin-top: 57px;
}

.van-tile a {
  color: #161616;
  text-decoration: none;    
}

.van-tile img {
  max-width: 100%;
  border-radius: 5px;
}

.van-list-container button {
  margin-right: 20px;
  cursor: pointer;
}

.van-type {
  height: 34px;
  padding: 6px 26px;
  font-style: normal;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  background-color: #FFEAD0;
  color: #4D4D4D;
  transition: 200ms all cubic-bezier(0.4, 0, 0.2, 1);
}

.van-type:hover {
  color: #FFEAD0;
}

.van-type:focus {
  outline: none;
}

.van-type.selected {
  color: #FFEAD0;
}

.van-type.simple:hover, .van-type.simple.selected {
  background-color: #E17654;
}

.van-type.rugged:hover, .van-type.rugged.selected {
  background-color: #115E59;
}

.van-type.luxury:hover, .van-type.luxury.selected {
  background-color: #161616;
}

.van-type.clear-filters {
  margin-left: -20px;
  height: 34px;
  padding: 6px 26px;
  font-style: normal;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  text-decoration: underline;
  background-color: transparent;
  color: #4D4D4D;
}

i[class*='van-type-'] {
  padding: 7px 14px;
}
`