---
title: "std::experimental::filesystem::directory_iterator::operator="
source_path: "cpp/experimental/fs/directory_iterator/increment"
category: "experimental"
---

Advances the iterator to the next entry.

## Declarations
```cpp
directory_iterator& operator++();
directory_iterator& increment( error_code& ec ) noexcept;
```
_(filesystem TS)_

## Parameters
- `ec`: error code to store error status to

## Return value
*this
