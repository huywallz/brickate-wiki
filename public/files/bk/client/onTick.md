Triggers immediately after the network host services all pending events.

It is the primary place to handle frame-by-frame logic before the engine begins the rendering phase.

```
bk.client.onTick( callback )
```

## Parameters
**<code>function callback</code>**
> The function to be called every frame.

> If `nil` or nothing is passed, the current callback is removed.

## Returns
Nothing.

## Example
<pre class="codeblock">
bk.client.onTick(function(dt)
    print("Delta time:", dt)
end)
</pre>