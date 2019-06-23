# Maps

## Usage Patterns

### Personal / Friends / Found Artiefact View

#### Description

A display of the loacitons of where you have taken the picture and submitted as artiefacts.

#### Visual

Maps with pins scattered around. Pins that are close to each other are grouped.
Tapped items produces a callout.

#### Implementation

```
<MapView>
    {markers.map((item, index) => (
        <Marker />
        {tapped && <Callout />}
    ))}
</MapView>
```

### Searching For Artiefacts

#### Description

People not in your friendlist, you can see their artiefacts only if their privacy setting allows it and if you are within the searching vicinity. The vicinity becomes smaller as more artiefacts are around in the area.

#### Visual

A circle around you displaying the area where your "search" is. Pins within that circle.
Other circles showing the general area/concentration of other artiefacts.

#### Implementation

```
<MapView>
    <Circle />
    {markers.map((item, index) => (
        <Marker />
        {tapped && <Callout />}
    ))}
    {areas.map((item, index) => (
        <Circle />
    ))}
</MapView>
```

### Artiefact Saga

#### Description

Record the location data of where you have travelled as well as the pictures you have taken on the way to curate a trip view.

#### Visual

A line displaying the path that you have taken as well as pins scattered through the path displaying the artiefacts that you have found along the way.

#### Implementation

```
<MapView>
    <Polyline />
    {markers.map((item, index) => (
        <Marker />
        {tapped && <Callout />}
    ))}
</MapView>
```

## API

### General

- the `Delta`s are the area of view
- `initialRegion` sets starting point
- Update the state of the as the region changes
  - Use `onRegionChange`
- `.map` markers and pass in `coordinate`
  - you can add custom marker view by passing in as `children`
  - or custom image by setting `image={require(...)}

### <MapView />

### Props

- `provider`: `google`
- `region`: Region
- `initialRegion`: Region
- `mapPadding`: ?
- `customMapStyle`: Array
  - Make this fetchable from `state` set by users
- `showsUserLocation`: Boolean
  - Add explanation to `NSLocationWhenInUseUsageDescription`
  - Set to true except for when viewing saga
- `followUserLocation`: Boolean
- `showsMyLocationButton`: Boolean
- `showsPointsOfInterest`: Boolean
  - Changeable from options via `state`
- `showsCompass`: Boolean
  - Changeable from options via `state`
- `showsScale`: Boolean
  - Changeable from options via `state`
- `showsTraffic`: `false`
- `showsIndoors`: `false`
- `zoomEnabled`: Boolean
  - Maybe I would want to change it in Search Mode
- `zoomTapEnabled`: Boolean
  - Same as above
- `zoomControlEnabled`: `false`
- `minZoomLevel`: Number
  - 0 to 20, probably should set this
- `maxZoomLevel`: Number
  - 0 to 20, probably should set this
- `scrollEnabled`: Boolean
  - Depends on the mode
- `pitchEnabled`: `false`
- `toolbarEnabled`: `false`
- `loadingEnabled`: Boolean
- `loadingIndicatorColor`: Color
- `loadingBackgroundColor`: Color
- `moveOnMarkerPress`: `false`
- `kmlSrc`: string - ?

#### Events (Return Values)

- `onMapReady`
- `onRegionChange`: Region
- `onRegionChangeComplete`: Region
- `onUserLocationChange`: `{coordinate: Location}`
- `onPress`: `{coordinate: LatLng, position: Point}`
- `onPoiClick`: `{coordinate: LatLng, position: Point, placeId: string, name: string}`
- `onLongPress`: `{coordinate: LatLng, position: Point}`
- `onMarkerPress`
- `onCalloutPress`

#### Methods (Args)

- `animateToRegion`: `region: Region, duration: Number`
- `getMapBoundaries`: `() => Promise<{northEast: LatLng, southWest: LatLng}>`
- `setMapBoundaries`: `northEast: LatLng, southWest: LatLng`
- `fitToSuppliedMarkers`: `markerIDs: String[], options: {edgePadding: EdgePadding, animated: Boolean}`
  - Performance problems in `ComponentDidMount` unless you timeout

### Types

- Region
- LatLng
- Location
- Point
- Frame
- EdgePadding
- EdgeInsets
- Marker
