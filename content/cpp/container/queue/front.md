---
title: "std::queue<T,Container>::front"
source_path: "cpp/container/queue/front"
category: "container"
---

Returns reference to the first element in the queue. This element will be the first element to be removed on a call to [pop()](/cpp/container/queue/pop/). Effectively calls c.front().

## Declarations
```cpp
reference front();
```

```cpp
const_reference front() const;
```

## Return value
Reference to the first element.

## See also
- [back](/cpp/container/queue/back/)
- [pop](/cpp/container/queue/pop/)
