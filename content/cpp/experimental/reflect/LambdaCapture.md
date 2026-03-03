---
title: "std::experimental::reflect::LambdaCapture"
source_path: "cpp/experimental/reflect/LambdaCapture"
header: "<experimental/reflect>"
category: "experimental"
---

The LambdaCapture concept is satisfied if and only if T reflects a lambda capture as introduced by the capture list or by capture defaults. (Note: The Scope of a LambdaCapture is its immediately enclosing Lambda).

## Declarations
```cpp
template< class T >
concept LambdaCapture = Variable<T> && /* see below */;
```
_(reflection TS)_

## Example
This section is incompleteReason: examples
