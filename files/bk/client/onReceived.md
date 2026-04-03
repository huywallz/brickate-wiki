Triggered when data arrives from the server.

```
bk.client.onRecieved( callback )
```

## Parameters
**<code>function callback</code>**
> The function to be called when data is received.

> Receives a single string argument containing the raw data.

> Passing `nil` will remove the existing callback.

## Returns
Nothing.

## Example
<pre class="codeblock">
-- Handle incoming server messages
bk.client.onRecieved(function(data)
    print("Server sent: " .. data)
end)
</pre>