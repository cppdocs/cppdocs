---
title: "std::basic_syncbuf<CharT,Traits,Allocator>::sync"
source_path: "cpp/io/basic_syncbuf/sync"
category: "io"
since: "C++20"
---

First, records that a flush is pending, by updating the appropriate private flag.

## Declarations
```cpp
protected:
int sync() override;
```

## Notes
sync() or its equivalent is implicitly called by close(), seekoff(), and seekpos() and explicitly called by [std::basic_streambuf::pubsync()](/cpp/io/basic_streambuf/pubsync/)

## Example
This section is incompleteReason: no example

## See also
- [sync](/cpp/io/basic_streambuf/pubsync/)
- [emit](/cpp/io/basic_osyncstream/emit/)
- [emit()](/cpp/io/basic_syncbuf/emit/)
