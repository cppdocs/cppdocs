---
title: "std::fflush"
source_path: "cpp/io/c/fflush"
header: "<cstdio>"
category: "io"
---

For output streams (and for update streams on which the last operation was output), writes any unwritten data from the stream's buffer to the associated output device.

## Declarations
```cpp
int fflush( std::FILE* stream );
```

## Parameters
- `stream`: the file stream to write out

## Return value
Returns zero on success. Otherwise [EOF](/cpp/io/c/) is returned and the error indicator of the file stream is set.

## Notes
POSIX [extends the specification of fflush](https://pubs.opengroup.org/onlinepubs/9699919799/functions/fflush.html) by defining its effects on an input stream, as long as that stream represents a file or another seekable device: in that case the POSIX file pointer is repositioned to match the C stream pointer (which effectively undoes any read buffering) and the effects of any [std::ungetc](/cpp/io/c/ungetc/) or [std::ungetwc](/cpp/io/c/ungetwc/) that weren't yet read back from the stream are discarded.

Microsoft also extends the specification of fflush by defining its effects on an input stream: in Visual Studio 2013 and prior, it [discarded the input buffer](https://learn.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2013/9yky46tz(v=vs.120)), in Visual Studio 2015 and newer, it [has no effect, buffers are retained](https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/fflush?view=msvc-140).

## See also
- [fopen](/cpp/io/c/fopen/)
- [fclose](/cpp/io/c/fclose/)
- [C documentation](/c/io/fflush/)
