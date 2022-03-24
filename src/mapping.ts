import { ipfs, json } from '@graphprotocol/graph-ts'
import {
  Minted as MintedEvent,
  Transfer as TransferEvent
} from "../generated/MyCollectible/MyCollectible"
import { Collectible } from "../generated/schema"



export function handleMinted(event: MintedEvent): void {
  let collectible = new Collectible(event.params.tokenId.toString())
  collectible.tokenId = event.params.tokenId
  collectible.owner = event.params.owner
  collectible.tokenURI = event.params.tokenURI

  let metadata = ipfs.cat(event.params.tokenURI)
  if (metadata) {
    const value = json.fromBytes(metadata).toObject()
    if (value) {
      /* using the metatadata from IPFS, update the token object with the values  */
      const name = value.get('name')
      const description = value.get('description')
      const image = value.get('image')
      const externalURL = value.get('external_url')
      if (name) collectible.name = name.toString()
      if (description) collectible.description = description.toString()
      if (image) collectible.image = image.toString()
      if (externalURL) collectible.externalURL = externalURL.toString()
    }
  }
  collectible.updatedAtTimestamp = event.block.timestamp
  collectible.save()
}

export function handleTransfer(event: TransferEvent): void {
  let collectible = Collectible.load(event.params.tokenId.toString())
  if (!collectible) {
    collectible = new Collectible(event.params.tokenId.toString())
  }
  collectible.owner = event.params.to
  collectible.updatedAtTimestamp = event.block.timestamp
  collectible.save()
}