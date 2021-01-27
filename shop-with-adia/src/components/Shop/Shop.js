import React from 'react';
import styled from 'styled-components/macro';
import Product from './ShopParts/Product';
import shopbg4 from './Assets/shopbg4.png';
import mmJcProdShotThree from './exploreAssets/mmJcProdShotThree.png';
import lauraMercierBGRemoved from './exploreAssets/lauraMercierBGRemoved.png';
import { productData } from './Data/ProductData';
import { Link } from 'react-router-dom';
import HoverImage from "react-hover-image";

// import shopbg1 from './Assets/shopbg1.png';
// import shopbg2 from './Assets/shopbg2.png';
// import shopbg3 from './Assets/shopbg3.png';
// import fentyBProdNoBg from './exploreAssets/fentyBProdNoBg.png';
// import mmJcProdShot from './exploreAssets/mmJcProdShot.png';
// import mmJcProdShotTwo from './exploreAssets/mmJcProdShotTwo.png';
// import moneyBag from './exploreAssets/moneyBag.png';


// mm-jc-prod-shot-2.png
// import shopbg5 from './Assets/shopbg5.png';



const ShopHome = styled.div`
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 1400px;
`;

const ShopImage = styled.img`
    width: 100%;
    ${'' /* height: 100vh; */}
    z-index: -1;
    margin-bottom: -550px;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)); 

    @media screen and (max-width: 1100px) {
        margin-bottom: -350px;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: -150px;
    }
`;

const ShopRows = styled.section`
    display: grid;
    row-gap: 8em;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    z-index: 1;
    margin-left: 5px;
    margin-right: 5px;
    ${'' /* margin-bottom: 5rem; */}

    @media screen and (max-width: 1400px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 1100px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

// const ShopMakeup = styled.section` 
//     display: flex;
//     z-index: 1;
//     margin-left: 5px;
//     margin-right: 5px;
// `

const ProductMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin: 10px;
    padding: 20px;
    width: 100%;
    max-height: 400px;
    min-width: 100px;
    background-color: white;
    z-index: 1;
    border: 1px solid #000;
`;

const ProductImage = styled.img`
    height: 300px;
    width: 100%;
    object-fit: cover;
    position: absolute;
    margin-bottom: 15px;
    ${'' /* padding-top: 15px; */}

    &:hover {
      transition:transform 2s ease;
      transform: scale(1.2);
      flex-grow: 0.5; 
    }
`;

const ProductInfo = styled.div`
    height: 100px;
    font-size: 20px;
    margin-bottom: 15px;
`;

const ProductPrice = styled.div`
    margin-top: 5px;
`;

const ProdButton = styled(Link)`
    background: #000;
    border: 2px solid;
    margin-top: 10px;
    padding: 8px;
    border-color: #fff;
    color: #fff; 
    font-weight: 700;
    font-size: 16px;
    text-decoration: none;

    &:hover {
        transform: translateY(-2px);
        cursor: pointer;
    }
`




const Shop = ({id, title, price, image, imageTwo}) => {
    return (
        <ShopHome>
            <div>
                <ShopImage src={shopbg4} alt="" />

                <ShopRows>
                    {productData.map((prods, id) => {
                        return (
                            <ProductMain>
                                <ProductInfo>
                                    <p>{prods.title}</p>
                                    <ProductPrice>
                                    <small>$</small>
                                    <strong>{prods.price}</strong>
                                    </ProductPrice>
                                </ProductInfo>
                                <HoverImage style={{maxHeight:'300px', width:'100%', objectFit:'contain', marginBottom:'15px', transition:'transform 2s ease-in-out'}} src={prods.image} hoverSrc={prods.imageTwo} alt=""/>
                                <ProdButton title={prods.title} to="/adiah/shop/products/{prods.title}">View More</ProdButton>
                            </ProductMain>
                        )
                    })}

            

                    {/* <Product
                        id="01119"
                        title="Mosel Scharzhofberger Riesling Auslese 2017 - Egon Müller, Vintage"
                        price={857.79}
                        rating={4}
                        image="https://s.tannico.it/media/catalog/product/cache/43/thumbnail/0dc2d03fe217f8c83829496872af24a0/m/u/muller42_2_1.jpg"
                        imageTwo="https://s.tannico.it/media/catalog/product/cache/43/thumbnail/0dc2d03fe217f8c83829496872af24a0/m/u/muller42_2_1.jpg"
                        />

                        <Product
                        id="01112"
                        title="Translucent Loose Setting Powder by LAURA MERCIER"
                        price={39.00}
                        rating={4}
                        image={lauraMercierBGRemoved}
                        imageTwo="https://lauramercier.scene7.com/is/image/lauramercier/laura_mercier_Translucent_Loose_Setting_Powder_Translucent_Medium_Deep~~~12701595-shadefinder?$lm_product_thumbnail_test$"
                        />
                    <Product
                        id="01113"
                        title="Air Jordan 1 Retro High OG Turbo Green by Nike"
                        price={835.00}
                        rating={4}
                        image="https://cdn-images.farfetch-contents.com/13/79/99/81/13799981_21663684_1000.jpg"
                        imageTwo="https://cdn-images.farfetch-contents.com/13/79/99/81/13799981_21663696_1000.jpg"
                        />

                    <Product
                        id="01111"
                        title="Jazz Club by Maison Martin Margiela"
                        price={130.00}
                        rating={4}
                        image={mmJcProdShotThree}
                        imageTwo="https://www.sephora.com/productimages/product/p385350-av-10-zoom.jpg?imwidth=1224"
                        />

                    <Product
                        id="01114"
                        title="Glycolic Acid 7% Toning Solution by The Ordinary"
                        price={7.00}
                        rating={4}
                        image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ0OLEaR3sAETnPkSvFHP-13r9qzOPbp4fATSIu0pcPP4c3Qw2QiET5v5ZGfOEg-1-1uabqTGPmEPL0OvHTRSiROJ7JgZlz"
                        imageTwo="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRbYNi5_GHoJhjgEamS-egI2dqKo2u7La3uktE_TT4ilf6YaO8hACnPBNytiTBlBc49jKuKCuVLPMDpCI_24VpGN4Q_Hxja"
                        />

                    <Product
                        id="011191"
                        title="Distressed high-rise straight-leg jeans by Maison Margiela"
                        price={690.00}
                        rating={4}
                        image="https://assetsprx.matchesfashion.com/img/product/1394384_1_zoom.jpg"
                        imageTwo="https://assetsprx.matchesfashion.com/img/product/1394384_2_large.jpg"
                        />

                    <Product
                        id="01115"
                        title="6.7 oz. Mon Beau Sapin Candle by Maison Francis Kurkdjian"
                        price={65.00}
                        rating={4}
                        image="https://images.neimanmarcus.com/ca/1/product_assets/C/5/2/Z/Y/NMC52ZY_az.jpg"
                        imageTwo="https://images.neimanmarcus.com/ca/1/product_assets/C/5/2/Z/Y/NMC52ZY_mz.jpg"
                        />

                    <Product
                        id="01116"
                        title="Le grand Chiquito tote bag by Jacquemus"
                        price={718.00}
                        rating={4}
                        image="https://cdn-images.farfetch-contents.com/16/31/69/13/16316913_31263071_1000.jpg"
                        imageTwo="https://cdn-images.farfetch-contents.com/16/31/69/13/16316913_31263073_1000.jpg"
                        />

                        <Product
                        id="01118"
                        title="Oud Satin mood Eau de Parfum by Maison Francis Kurkdjian"
                        price={565.00}
                        rating={4}
                        image="https://images.neimanmarcus.com/ca/7/product_assets/C/4/N/0/A/NMC4N0A_mz.jpg"
                        imageTwo="https://images.neimanmarcus.com/ca/6/product_assets/C/4/N/0/A/NMC4N0A_az.jpg"
                        />

                        <Product
                        id="011193"
                        title="Run Star Hike by Converse"
                        price={115.00}
                        rating={4}
                        image="https://images.asos-media.com/products/converse-run-star-hike-hi-black-ice-sneakers-in-black/22884736-1-black?$n_640w$&wid=634&fit=constrain"
                        imageTwo="https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwd5e21efd/images/e_08/166799C_E_08X1.jpg?sw=406"
                        />

                        

                        <Product
                        id="01117"
                        title="RELAX RIESLING, German"
                        price={10.00}
                        rating={4}
                        image="https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/h9f/h18/13443051880478.png"
                        imageTwo="https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/h9f/h18/13443051880478.png"
                        />

                        <Product
                        id="0111983"
                        title="Lip Sleeping Mask by LANEIGE"
                        price={22.00}
                        rating={4}
                        image="https://www.sephora.com/productimages/sku/s1966258-main-zoom.jpg?imwidth=1224"
                        imageTwo="https://www.sephora.com/productimages/sku/s1966258-av-05-zoom.jpg?imwidth=1224"
                        />

                        <Product
                        id="0111446"
                        title="The It Girl by Cecily von Ziegesar"
                        price={12.99}
                        rating={4}
                        image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344263385l/561403.jpg"
                        imageTwo="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344263385l/561403.jpg"
                        />

                        <Product
                        id="0111931"
                        title="Teint Idole Ultra Long Wear Foundation by Lancôme"
                        price={47.00}
                        rating={4}
                        image="https://www.sephora.com/productimages/sku/s1896224-main-zoom.jpg?imwidth=1224"
                        imageTwo="https://www.sephora.com/productimages/product/p308201-av-25-zoom.jpg?imwidth=1224"
                        />

                        <Product
                        id="011193816"
                        title="RUBY BERRIES 100 ML (3.4 FL. OZ) by ZARA"
                        price={19.90}
                        rating={4}
                        image="https://static.zara.net/photos///2021/V/2/1/p/0120/043/999/2/w/1440/0120043999_6_1_1.jpg?ts=1610619829241"
                        imageTwo="https://static.zara.net/photos///2021/V/2/1/p/0120/043/999/2/w/1280/0120043999_6_3_1.jpg?ts=1610619949524"
                        />

                        <Product
                        id="011190273"
                        title="Stretch Curvy Mom Jean by American Eagle"
                        price={49.95}
                        rating={4}
                        image="https://s7d2.scene7.com/is/image/aeo/0436_2813_408_f?$pdp-m-opt$&fmt=webp"
                        imageTwo="https://s7d2.scene7.com/is/image/aeo/4433_2718_167_os?$pdp-m-opt$&fmt=webp"
                        />

                        <Product
                        id="0111910020"
                        title="Bum Bum Cream vy Sol de Janeiro"
                        price={45.00}
                        rating={4}
                        image="https://www.sephora.com/productimages/sku/s1802412-main-zoom.jpg?imwidth=1224"
                        imageTwo="https://www.sephora.com/productimages/product/p406080-av-02-zoom.jpg?imwidth=1224"
                        />

                        <Product
                        id="0111908362"
                        title="Cotton Underwire Bra by ZARA"
                        price={29.90}
                        rating={4}
                        image="https://static.zara.net/photos///2021/V/0/1/p/5573/411/250/2/w/2880/5573411250_1_1_1.jpg?ts=1611101048685"
                        imageTwo="https://static.zara.net/photos///2021/V/0/1/p/5573/411/250/2/w/1280/5573411250_2_2_1.jpg?ts=1611101046949"
                        />

                        <Product
                        id="01119017384"
                        title="Tobacco Vanille by TOM FORD"
                        price={650.00}
                        rating={4}
                        image="https://www.sephora.com/productimages/sku/s1764125-main-zoom.jpg?imwidth=1224"
                        imageTwo="https://www.sephora.com/productimages/product/p393151-av-10-zoom.jpg?imwidth=1224"
                        />

                        <Product
                        id="01119118393"
                        title="LOGO BUCKET HAT by LEVI"
                        price={25.00}
                        rating={4}
                        image="https://lsco.scene7.com/is/image/lsco/380250018-front-pdp-lse?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=810&hei=1080"
                        imageTwo="https://lsco.scene7.com/is/image/lsco/380250022-front-pdp-lse?$grid_desktop_full$"
                        />

                        <Product
                        id="01119001832"
                        title="Dracaena Marginata | Dragon Tree via IKEA"
                        price={12.99}
                        rating={4}
                        image="https://www.ikea.com/us/en/images/products/dracaena-marginata-potted-plant-dragon-tree-3-stem__67436_PE181279_S5.JPG?f=g"
                        imageTwo="https://www.ikea.com/us/en/images/products/dracaena-marginata-potted-plant-dragon-tree-3-stem__67436_PE181279_S5.JPG?f=g"
                        />

                        <Product
                        id="011191710002"
                        title="Sportswear Marble EcoDown by Nike"
                        price={300.00}
                        rating={4}
                        image="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/330a5f3b-49cf-4ea1-9949-53c54e204967/sportswear-marble-ecodown-womens-parka-n4R0WP.jpg"
                        imageTwo="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/625073f8-4143-4c8a-944e-0bb50ffaeb74/sportswear-marble-ecodown-womens-parka-n4R0WP.jpg"
                        />

                        <Product
                        id="011191111938"
                        title="Outfitter Luggage | 70L by Herschel"
                        price={139.00}
                        rating={4}
                        image="https://herschel.com/content/dam/herschel/products/10583/10583-04091-OS_02.jpg.sthumbnails.1000.1250.jpg"
                        imageTwo="https://herschel.com/content/dam/herschel/products/10583/10583-04091-OS_05.jpg.sthumbnails.1000.1250.jpg"
                        />

                        <Product
                        id="0111910941571"
                        title="LIBRE Eau de Parfum Intense by Yves Saint Laurent"
                        price={132.00}
                        rating={4}
                        image="https://www.sephora.com/productimages/sku/s2371896-main-zoom.jpg?imwidth=1224"
                        imageTwo="https://www.sephora.com/productimages/product/p462417-av-10-zoom.jpg?imwidth=1224"
                        />

                        <Product
                        id="011190992483"
                        title="La nuit Trésor Eau de Parfum by LANCÔME"
                        price={126.00}
                        rating={4}
                        image="https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-master-catalog/default/dwb059b8f5/Products/fragpackshots/TresorLaNuit_1000x1000_3.4oz.jpg?sw=650&sh=650&sm=fit&sfrm=png&q=70"
                        imageTwo="https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-master-catalog/default/dwaf8de3e9/Products/LNTEDP.jpg?sw=650&sh=650&sm=fit&q=70"
                        />

                        <Product
                        id="01119777339"
                        title="Women's Metallic 1502443 Premiere Bracelet Watch: BOSS by Hugo Boss"
                        price={441.00}
                        rating={4}
                        image="https://cdna.lystit.com/1040/1300/n/photos/asos/c580a578/hugo-boss-Gold-1502443-Premiere-Bracelet-Watch.jpeg"
                        imageTwo="https://cdna.lystit.com/1040/1300/n/photos/asos/43e6bd38/hugo-boss-Gold-1502443-Premiere-Bracelet-Watch.jpeg"
                        />

                        <Product
                        id="011196392172"
                        title="Ultra Repair BarriAIR Cream by First Aid Beauty"
                        price={30.00}
                        rating={4}
                        image="https://www.sephora.com/productimages/sku/s2315984-main-zoom.jpg?imwidth=1224"
                        imageTwo="https://www.sephora.com/productimages/product/p437995-av-01-zoom.jpg?imwidth=1224"
                        />

                        <Product
                        id="011191019339"
                        title="Criminal Minds: The Complete Series via Barnes & Noble"
                        price={199.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/91NcLsncwKL._SY679_.jpg"
                        imageTwo="https://images-na.ssl-images-amazon.com/images/I/91vfuNuOuUL._SY679_.jpg"
                        />

                        <Product
                        id="011191119383"
                        title="Gloss Bomb Universal Lip Luminizer: FENTY BEAUTY by Rihanna"
                        price={19.00}
                        rating={4}
                        image="https://www.sephora.com/productimages/sku/s2327245-main-zoom.jpg?imwidth=1224"
                        imageTwo="https://www.sephora.com/productimages/product/p67988453-av-08-zoom.jpg?imwidth=1224"
                        />

                        <Product
                        id="0111993749"
                        title="Dracaena Massangeana | Dom plant via IKEA"
                        price={24.99}
                        rating={4}
                        image="https://www.ikea.com/us/en/images/products/dracaena-massangeana-potted-plant-dom-plant-3-stem__0098047_PE238948_S5.JPG?f=xl"
                        imageTwo="https://www.ikea.com/us/en/images/products/dracaena-massangeana-potted-plant-dom-plant-3-stem__0900043_PE654237_S5.JPG?f=xl"
                        />

                        <Product
                        id="01119000183"
                        title="Short pink and white viscose dress by BALMAIN"
                        price={4795.00}
                        rating={4}
                        image="https://www.balmain.com/12/12548243HB_14_f.jpg"
                        imageTwo="https://www.balmain.com/12/12548243hb_14_b.jpg"
                        />

                        <Product
                        id="01119210215"
                        title="Large 3-in-1 Nano Ionic Facial Steamer by NanoSteamer"
                        price={49.95}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/712XJoEzzVL._SL1500_.jpg"
                        imageTwo="https://images-na.ssl-images-amazon.com/images/I/7152FpTRn3L._SL1500_.jpg"
                        /> */}
                </ShopRows>
            </div>
        </ShopHome>
    )
}

export default Shop;