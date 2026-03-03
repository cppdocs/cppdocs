---
title: "std::experimental::ranges::invoke"
source_path: "cpp/experimental/ranges/functional/invoke"
header: "<experimental/ranges/functional>"
category: "experimental"
---

Invoke the [Callable](/cpp/named_req/callable/) object f with the parameters args, and return the result, as if by return INVOKE([std::forward](/cpp/utility/forward/)<F>(f), [std::forward](/cpp/utility/forward/)<Args>(args)...);, where INVOKE(f, t1, t2, ..., tN) is defined as follows:

## Declarations
```cpp
template< class F, class... Args >
std::result_of_t<F&&(Args&&...)> invoke( F&& f, Args&&... args );
```
_(ranges TS)_

## Parameters
- `f`: Callable object to be invoked
- `args`: arguments to pass to f

## See also
- [invokeinvoke_r](/cpp/utility/functional/invoke/)
- [Callable](/cpp/named_req/callable/)
