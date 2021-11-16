# Repro code for typedoc-plugin-markdown#268

The issue is abouts documenting promises that return object.
The function `getUser` resolves in an object described inline. 
Without the plugin, the returned object is fully described. With the plugin, the documentation is limited to `Object`.

## Generate docs
To generate the documentation, use one of the two following commands
```
npm run doc-html
npm run doc-markdown
```


## Without the plugin
```https://en.wikipedia.org/wiki/Polaroid_Corporation#cite_note-boston-history-polaroid-1
Returns Promise<{ data: string; id: string }>
```


## With typedoc-plugin-markdown plugin
```
`Promise`<`Object`\>
```
