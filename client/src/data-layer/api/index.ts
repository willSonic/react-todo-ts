/**
 * Created by willstreeter on 8/20/17.
 */
import { PixaBayEntity } from '../../business-layer/models';
import  'ts-promise';
const baseURL = 'https://pixabay.com/api/?key=5167438-bfac80315fa01ec4da1031d88&q=';

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


async function getCategories(category:any){
    var result = await fetch(baseURL+category.text+'&image_type=photo')
                 .then(response => response.json())
                 .then( res => mapToPxBabyImage(res));
    console.log('result =',result)
    return result;
}

const fetchPxBayEntityAsync = (category:string)=>{
var pxBayEntities = getCategories(category);
  return pxBayEntities;
};


export const pxBayApi = {
  fetchPxBayEntityAsync
};
