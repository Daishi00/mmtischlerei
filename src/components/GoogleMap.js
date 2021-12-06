import React from "react"
import GoogleMapReact from "google-map-react"
import GooglePin from "./GooglePin"
import styled from "styled-components"

const defaultProps = {
  center: {
    lat: 51.9631708595218,
    lng: 14.796754146129132,
  },
  zoom: 13,
}

const GoogleMap = () => (
  <Wrapper>
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLEMAPS_API }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <GooglePin lat={51.962895} lng={14.793523} text={"M&M Tischlerei"} />
    </GoogleMapReact>
  </Wrapper>
)

const Wrapper = styled.div`
  width: 100%;
  height: 30rem;
`

export default GoogleMap
