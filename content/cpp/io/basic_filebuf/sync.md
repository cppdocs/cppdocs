---
title: "std::basic_filebuf<CharT,Traits>::sync"
source_path: "cpp/io/basic_filebuf/sync"
category: "io"
---

If a put area exists (e.g. the file was opened for writing), calls [overflow()](/cpp/io/basic_streambuf/overflow/) to write all pending output to the file, then flushes the file as if by calling [std::fflush](/cpp/io/c/fflush/).

## Declarations
```cpp
protected:
virtual int sync()
```

## Return value
0 in case of success, -1 in case of failure.

## Notes
sync() or its equivalent is implicitly called for output streams by [close()](/cpp/io/basic_filebuf/close/), [seekoff()](/cpp/io/basic_filebuf/seekoff/), and [seekpos()](/cpp/io/basic_filebuf/seekpos/) and explicitly called by [std::basic_streambuf::pubsync()](/cpp/io/basic_streambuf/pubsync/)

## Example
This section is incompleteReason: no example

## See also
- [pubsync](/cpp/io/basic_streambuf/pubsync/)
- [fflush](/cpp/io/c/fflush/)
