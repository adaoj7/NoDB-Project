let NAT_DATA = [

    {id:0, img:'https://i.pinimg.com/736x/51/34/d8/5134d857a9f4b75cdad2d94531cfe177--nativity-sets.jpg', origin:'Curitiba, BR',owner:'Pinterest',addImg:''},
    {id:1, img:'https://m.media-amazon.com/images/I/817LX9Zi7IL._UF894,1000_QL80_.jpg', origin:'Tokyo, JP',owner:'Amazon',addImg:''},
    {id:2, img:'https://thethousandmiler.com/wp-content/uploads/2018/12/Nativity_collection-painting.jpg', origin:'Africa',owner:'Melanie',addImg:''},
    {id:3, img:'https://i.etsystatic.com/13023652/c/607/482/158/41/il/d65925/2150930677/il_340x270.2150930677_gp72.jpg', origin:"Saint Basil's Cathedral",owner:'Etsy',addImg:''},
    {id:4, img:'https://i.etsystatic.com/13023652/r/il/16df29/1875063245/il_570xN.1875063245_qam5.jpg', origin:"India",owner:'Etsy',addImg:''}
    
]

let globalId = 5

const handlerFunctions = {

    natList: (req,res) => {
        res.send(NAT_DATA)
    },
    editNat: (req,res) => {
        const {id} = req.params
        const {img,origin,owner,addImg} = req.body

        const index = NAT_DATA.findIndex(ele => ele.id === +id)
        const nativity = NAT_DATA[index]

        nativity.owner = owner ?? nativity

        nativity.addImg = addImg ?? nativity

        
        res.send(nativity)
    },
    deleteNat: (req,res) => {
        const {id} = req.params

        let filteredNativities = NAT_DATA.filter((ele) => ele.id !== +id)

        NAT_DATA = filteredNativities

        res.send('Item deleted')
    },
    addNat: (req,res) => {
        const newObj = {
            id: globalId,
            // img,
            // origin,
        }
        NAT_DATA.push(newObj)

        globalId++
        console.log(newObj)
        res.send(newObj)
    },

    imageAndOrigin: (req,res) => {
        const {id} = req.params
        const {img,origin} = req.body

        const index = NAT_DATA.findIndex(ele => ele.id === +id)
        const nativity = NAT_DATA[index]

        nativity.img = img ?? nativity

        nativity.origin = origin ?? nativity

        // if (NAT_DATA(id).img === '') {
        //     NAT_DATA(id).img = img
        // }

        // if (NAT_DATA(id).origin === ''){
        //     NAT_DATA(id).origin = origin
        // }

        res.send(nativity)
    }

}

export default handlerFunctions