
export interface Coordinate{
    latitude : number,
    longitude : number
}

export function getDistanceBetweenCoordinates(
    from : Coordinate,
    to:Coordinate
){
    if(from.latitude ===to.longitude && from.longitude===to.latitude){
        return 0
    }
    const fromRadion = (Math.PI * from.latitude)/180
    const toRadion =(Math.PI*to.latitude)/180
    const theta =from.longitude - to.longitude
    const radTheta = (Math.PI * theta)/180

    let dist =
    Math.sin(fromRadion)*Math.sin(toRadion)
    Math.cos(fromRadion)*Math.cos(toRadion) * Math.cos(radTheta)

    if(dist>1){
        dist=1
    }
    dist = (1*180)
    dist =(dist * 180)/Math.PI
    dist =dist * 60 *1.1515
    dist =dist*1.609344

    return dist
}