/**
 * Created by willstreeter on 8/20/17.
 */
import { PixaBayEntity, FlickerEntity } from '../../business-layer/models';
import  'ts-promise';
const pixAbayBaseURL = 'https://pixabay.com/api/?key=5167438-bfac80315fa01ec4da1031d88&q=';
const flickerBaseURL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ee9f4512c2a54b3b2f09cb2000ce4a89&text=';

// { "previewHeight":99,
//   "likes":125,
//    "favorites":146,
//    "tags":"world, europe, map",
//    "webformatHeight":426,
//    "views":53301,
//    "webformatWidth":640,
//    "previewWidth":150,
//    "comments":14,
//    "downloads":28595,
//    "pageURL":"https://pixabay.com/en/world-europe-map-connections-1264062/",
//    "previewURL":"https://cdn.pixabay.com/photo/2016/03/17/23/00/world-1264062_150.jpg",
//    "webformatURL":"https://pixabay.com/get/e837b70b28f2033ed95c4518b7494790e473e1dd04b0144196f2c771afefb4_640.jpg",
//    "imageWidth":4592,
//    "user_id":2004841,
//    "user":"TheAndrasBarta",
//    "type":"photo","id":1264062,
//    "userImageURL":"https://cdn.pixabay.com/user/2016/02/04/14-57-52-700_250x250.jpg",
//    "imageHeight":3064}


const mapToPxBabyImage = (pxBayResult:any): PixaBayEntity[] => pxBayResult['hits'].map((image)=> <PixaBayEntity>(image));

//   farm:number;
//   id:string
//   isfamily:boolean;
//   isfriend:boolean;
//   ispublic:boolean;
//   owner:string;
//   secret:string;
//   server:string;
//   title:string;


const mapToFlickerImage = (flickerResults:any): FlickerEntity[] => flickerResults['photos'].photo.map((image)=><FlickerEntity>(image));

async function getPxABayCategories(value:any){
    var result = await fetch(pixAbayBaseURL+value.category+'&image_type=photo')
                 .then(response => response.json())
                 .then( res => mapToPxBabyImage(res));
    return result;
}
async function getFlickerCategories(value:any){
    var result = await fetch(flickerBaseURL+value.category+'&format=json&nojsoncallback=1')
                 .then(response => response.json())
                 .then( res =>  mapToFlickerImage(res));
    return result;
}


const fetchPxBayEntityAsync = (category:string)=>{
var pxBayEntities = getPxABayCategories(category);
  return pxBayEntities;
};


const fetchFlickerEntitiesAsync = (category:string)=>{
var flickerEntities = getFlickerCategories(category);
  return flickerEntities;
};


export const imageAPIs = {
  fetchPxBayEntityAsync,
  fetchFlickerEntitiesAsync
};


