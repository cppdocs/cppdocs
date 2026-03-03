---
title: "std::tx_exception"
source_path: "cpp/error/tx_exception"
header: "<stdexcept>"
category: "error"
---

Defines an exception type that can be used to cancel and roll back an atomic transaction initiated by the keyword [atomic_cancel](/cpp/language/transactional_memory/).

## Declarations
```cpp
template< class T >
class tx_exception : public std::runtime_error;
```
_(TM TS)_

## Parameters
- `value`: payload object
- `what_arg`: explanatory string
- `other`: another exception object to copy

## Return value
*this
