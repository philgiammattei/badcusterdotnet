@Grab('org.yaml:snakeyaml:1.29')

import java.nio.file.Files
import java.nio.file.Paths
import org.yaml.snakeyaml.Yaml

// Define the path to the directory containing markdown files
def directory = "/Users/phil/workspace/phils-web-site/md/blog"

// Create a list of maps containing metadata from the frontmatter of each file
def metadataList = []
Files.newDirectoryStream(Paths.get(directory), "*.md").each { file ->
    def frontmatter = file.text.split("---")[1]
    def yaml = new Yaml().load(frontmatter)
    def metadata = [
        title: yaml?.title ?: "",
        date_published: yaml?.datePublished ?: "",
        canonical_url: yaml?.canonicalUrl ?: ""
    ]
    metadataList.add(metadata)
}

// Sort the list of maps by the date_published value
metadataList.sort { a, b ->
    def aDate = Date.parse("MM/dd/yyyy", a.date_published ?: "")
    def bDate = Date.parse("MM/dd/yyyy", b.date_published ?: "")
    aDate <=> bDate
}

// Check if a command line argument was provided
if (args.length > 0) {
    def inputDate = Date.parse("MM/dd/yyyy", args[0])
    metadataList = metadataList.findAll { metadata ->
        Date.parse("MM/dd/yyyy", metadata.date_published ?: "") >= inputDate
    }
}

// Print the title, datePublished, and canonicalUrl for each file
metadataList.each { metadata ->
    println("${metadata.title} ${metadata.date_published} ${metadata.canonical_url}")
}
