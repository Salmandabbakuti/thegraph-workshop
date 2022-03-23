# mycollectible-api
mycollectible nft subgraph api template

#### My Collectible Subgraph API


```
npm install -g @graphprotocol/graph-cli
```

```shell
graph init --from-contract 0xaE61560Ba3A62B7bbC313EF8eAECa28e717ff443 --network ropsten --contract-name MyCollectible --index-events

√ Protocol · ethereum
√ Product for which to initialize · hosted-service
√ Subgraph name · salmandabbakuti/mycollectible
√ Directory to create the subgraph in · mycollectible-api
? Ethereum network ...
√ Ethereum network · ropsten
√ Contract address · 0xaE61560Ba3A62B7bbC313EF8eAECa28e717ff443
× Failed to fetch ABI from Etherscan: ABI not found, try loading it from a local file
√ ABI file (path) · ./mycollectible-dapp/artifacts/contracts/MyCollectible.sol/MyCollectible.json
√ Contract Name · MyCollectible
```
```shell
graph auth https://api.thegraph.com/deploy/ <Your account's access token not subgraph's token>

Deploy key set for https://api.thegraph.com/deploy/

```

```
yarn deploy

$ graph deploy --node https://api.thegraph.com/deploy/ salmandabbakuti/mycollectible
  Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2
  Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3
  Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4
  Skip migration: Bump mapping apiVersion from 0.0.4 to 0.0.5
  Skip migration: Bump mapping specVersion from 0.0.1 to 0.0.2
√ Apply migrations
√ Load subgraph from subgraph.yaml
  Compile data source: MyCollectible => build\MyCollectible\MyCollectible.wasm
√ Compile subgraph
  Copy schema file build\schema.graphql
  Write subgraph file build\MyCollectible\abis\MyCollectible.json
  Write subgraph manifest build\subgraph.yaml
√ Write compiled subgraph to build\
  Add file to IPFS build\schema.graphql
                .. QmfV4uB1PyWkQb7Wb5edZQzXwb2NEqU3Mi7fwdGgUe71G8
  Add file to IPFS build\MyCollectible\abis\MyCollectible.json
                .. QmVpTCh71ysapTdXoqNiqnzQ85by4TZnoS4WbTUnppXfhS
  Add file to IPFS build\MyCollectible\MyCollectible.wasm
                .. QmRCE6JQfLMMJ6eUz5mLMgzRFiJNN2cLNeVocdwMVrEFmJ
√ Upload subgraph to IPFS
```

```
yarn codegen // for applying code migrations

graph codegen
  Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2
  Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3
  Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4
  Skip migration: Bump mapping apiVersion from 0.0.4 to 0.0.5
  Skip migration: Bump mapping specVersion from 0.0.1 to 0.0.2
√ Apply migrations
√ Load subgraph from subgraph.yaml
  Load contract ABI from abis\MyCollectible.json
√ Load contract ABIs
  Generate types for contract ABI: MyCollectible (abis\MyCollectible.json)
  Write types to generated\MyCollectible\MyCollectible.ts
√ Generate types for contract ABIs
√ Generate types for data source templates
√ Load data source template ABIs
√ Generate types for data source template ABIs
√ Load GraphQL schema from schema.graphql
  Write types to generated\schema.ts
√ Generate types for GraphQL schema

Types generated successfully
```

```
yarn build

yarn run v1.22.17
$ graph build
  Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2
  Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3
  Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4
  Skip migration: Bump mapping apiVersion from 0.0.4 to 0.0.5
  Skip migration: Bump mapping specVersion from 0.0.1 to 0.0.2
√ Apply migrations
√ Load subgraph from subgraph.yaml
  Compile data source: MyCollectible => build\MyCollectible\MyCollectible.wasm
√ Compile subgraph
  Copy schema file build\schema.graphql
  Write subgraph file build\MyCollectible\abis\MyCollectible.json
  Write subgraph manifest build\subgraph.yaml
√ Write compiled subgraph to build\

Build completed: D:\salman\mycollectible-api\build\subgraph.yaml

```

```
yarn deploy

graph deploy --node https://api.thegraph.com/deploy/ salmandabbakuti/my-collectible 
  Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2
  Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3
  Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4
  Skip migration: Bump mapping apiVersion from 0.0.4 to 0.0.5
  Skip migration: Bump mapping specVersion from 0.0.1 to 0.0.2
√ Apply migrations
√ Load subgraph from subgraph.yaml
  Compile data source: MyCollectible => build\MyCollectible\MyCollectible.wasm
√ Compile subgraph
  Copy schema file build\schema.graphql
  Write subgraph file build\MyCollectible\abis\MyCollectible.json
  Write subgraph manifest build\subgraph.yaml
√ Write compiled subgraph to build\
  Add file to IPFS build\schema.graphql
                .. QmepQJ45nF6bqKbNiQ4graibEft9iLcRnRbs6j4QuyqsRK
  Add file to IPFS build\MyCollectible\abis\MyCollectible.json
                .. QmVpTCh71ysapTdXoqNiqnzQ85by4TZnoS4WbTUnppXfhS
  Add file to IPFS build\MyCollectible\MyCollectible.wasm
                .. QmUGUizMA5ivcZkcsf1nNQMdipmi4UecSs72tEpXvxsi6g
√ Upload subgraph to IPFS

Build completed: QmVvQTefvGtmbyfx1MFve78hB1dZ2a2d2gKGcwbxv73UFw

Deployed to https://thegraph.com/explorer/subgraph/salmandabbakuti/my-collectible

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/salmandabbakuti/my-collectible
Subscriptions (WS): wss://api.thegraph.com/subgraphs/name/salmandabbakuti/my-collectible
```
#### Mint Event indexing

![Mint Event](https://github.com/Salmandabbakuti/mycollectible-api/blob/docs/images/mint.png)

#### Transfer Event indexing

![Transfer Event](https://github.com/Salmandabbakuti/mycollectible-api/blob/docs/images/transfer.png)
