export enum SecretSync {
  AWSParameterStore = "aws-parameter-store",
  AWSSecretsManager = "aws-secrets-manager",
  GitHub = "github",
  GCPSecretManager = "gcp-secret-manager"
}

export enum SecretSyncInitialSyncBehavior {
  OverwriteDestination = "overwrite-destination",
  ImportPrioritizeSource = "import-prioritize-source",
  ImportPrioritizeDestination = "import-prioritize-destination"
}

export enum SecretSyncImportBehavior {
  PrioritizeSource = "prioritize-source",
  PrioritizeDestination = "prioritize-destination"
}
