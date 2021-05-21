/**
* The module for the meta of the app
* It defines what will be return to facebook share
* @module components/Meta
*/

/**
* @function CustomMeta
* render the Meta component
* @param {Object} props The props of the component
* @return {Object} The dom of the Meta component
**/
const CustomMeta = props => {
  return (
    <>
      <meta property="og:url" content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="When Great Minds Don’t Think Alike" />
      <meta property="og:description" content="How much does culture influence creative thinking?" />
      <meta property="og:image" content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />
    </>
  )
}

export default CustomMeta
